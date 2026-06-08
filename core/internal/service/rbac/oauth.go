package rbac

import (
	"billionmail-core/internal/model"
	"billionmail-core/internal/service/public"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/gogf/gf/util/guid"
	"github.com/gogf/gf/v2/frame/g"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

// oauthService handles OAuth provider authentication
type oauthService struct{}

var iOAuthService *oauthService

// OAuth returns the OAuth service singleton
func OAuth() *oauthService {
	if iOAuthService == nil {
		iOAuthService = &oauthService{}
	}
	return iOAuthService
}

func (s *oauthService) redirectURI(provider string) string {
	base := public.MustGetDockerEnv("OAUTH_REDIRECT_BASE_URL", "")
	base = strings.TrimRight(base, "/")
	switch provider {
	case "microsoft":
		// Azure does not allow query strings in redirect URIs
		return base + "/api/oauth/callback/microsoft"
	default:
		return base + "/api/oauth/callback?provider=" + provider
	}
}

func (s *oauthService) googleConfig() *oauth2.Config {
	clientId := public.MustGetDockerEnv("GOOGLE_CLIENT_ID", "")
	clientSecret := public.MustGetDockerEnv("GOOGLE_CLIENT_SECRET", "")
	return &oauth2.Config{
		ClientID:     clientId,
		ClientSecret: clientSecret,
		RedirectURL:  s.redirectURI("google"),
		Scopes:       []string{"openid", "email", "profile"},
		Endpoint:     google.Endpoint,
	}
}

func (s *oauthService) microsoftConfig() *oauth2.Config {
	clientId := public.MustGetDockerEnv("MICROSOFT_CLIENT_ID", "")
	clientSecret := public.MustGetDockerEnv("MICROSOFT_CLIENT_SECRET", "")
	tenantId := public.MustGetDockerEnv("MICROSOFT_TENANT_ID", "common")
	return &oauth2.Config{
		ClientID:     clientId,
		ClientSecret: clientSecret,
		RedirectURL:  s.redirectURI("microsoft"),
		Scopes:       []string{"openid", "email", "profile", "User.Read"},
		Endpoint: oauth2.Endpoint{
			AuthURL:  "https://login.microsoftonline.com/" + tenantId + "/oauth2/v2.0/authorize",
			TokenURL: "https://login.microsoftonline.com/" + tenantId + "/oauth2/v2.0/token",
		},
	}
}

// GenerateState creates a CSRF state token stored in Redis with a 10-minute TTL
func (s *oauthService) GenerateState(ctx context.Context) (string, error) {
	state := guid.S()
	err := g.Redis().SetEX(ctx, "OAUTH_STATE:"+state, "1", 600)
	if err != nil {
		return "", fmt.Errorf("failed to store OAuth state: %w", err)
	}
	return state, nil
}

// ValidateState consumes and validates the CSRF state token (single-use)
func (s *oauthService) ValidateState(ctx context.Context, state string) bool {
	deleted, err := g.Redis().Del(ctx, "OAUTH_STATE:"+state)
	if err != nil {
		return false
	}
	return deleted > 0
}

// BuildAuthURL constructs the provider authorization URL
func (s *oauthService) BuildAuthURL(provider, state string) string {
	switch provider {
	case "google":
		return s.googleConfig().AuthCodeURL(state, oauth2.AccessTypeOnline)
	case "microsoft":
		return s.microsoftConfig().AuthCodeURL(state, oauth2.AccessTypeOnline)
	}
	return ""
}

// ExchangeAndFetchUser exchanges the authorization code for a token and retrieves user info
func (s *oauthService) ExchangeAndFetchUser(ctx context.Context, provider, code string) (providerUid, email, name string, err error) {
	switch provider {
	case "google":
		return s.exchangeGoogle(ctx, code)
	case "microsoft":
		return s.exchangeMicrosoft(ctx, code)
	default:
		err = fmt.Errorf("unsupported provider: %s", provider)
		return
	}
}

func (s *oauthService) exchangeGoogle(ctx context.Context, code string) (providerUid, email, name string, err error) {
	cfg := s.googleConfig()
	token, err := cfg.Exchange(ctx, code)
	if err != nil {
		err = fmt.Errorf("google token exchange failed: %w", err)
		return
	}

	req, err := http.NewRequestWithContext(ctx, "GET", "https://www.googleapis.com/oauth2/v3/userinfo", nil)
	if err != nil {
		return
	}
	req.Header.Set("Authorization", "Bearer "+token.AccessToken)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		err = fmt.Errorf("google userinfo request failed: %w", err)
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return
	}

	var info struct {
		Sub   string `json:"sub"`
		Email string `json:"email"`
		Name  string `json:"name"`
	}
	if err = json.Unmarshal(body, &info); err != nil {
		err = fmt.Errorf("failed to parse google userinfo: %w", err)
		return
	}
	if info.Sub == "" {
		err = fmt.Errorf("google userinfo missing subject")
		return
	}

	providerUid = info.Sub
	email = info.Email
	name = info.Name
	return
}

func (s *oauthService) exchangeMicrosoft(ctx context.Context, code string) (providerUid, email, name string, err error) {
	cfg := s.microsoftConfig()
	token, err := cfg.Exchange(ctx, code)
	if err != nil {
		err = fmt.Errorf("microsoft token exchange failed: %w", err)
		return
	}

	req, err := http.NewRequestWithContext(ctx, "GET", "https://graph.microsoft.com/v1.0/me", nil)
	if err != nil {
		return
	}
	req.Header.Set("Authorization", "Bearer "+token.AccessToken)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		err = fmt.Errorf("microsoft graph request failed: %w", err)
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return
	}

	var info struct {
		Id                string `json:"id"`
		DisplayName       string `json:"displayName"`
		Mail              string `json:"mail"`
		UserPrincipalName string `json:"userPrincipalName"`
	}
	if err = json.Unmarshal(body, &info); err != nil {
		err = fmt.Errorf("failed to parse microsoft userinfo: %w", err)
		return
	}
	if info.Id == "" {
		err = fmt.Errorf("microsoft userinfo missing id")
		return
	}

	providerUid = info.Id
	// Prefer mail over userPrincipalName (UPN may be a non-email alias)
	if info.Mail != "" {
		email = info.Mail
	} else {
		email = info.UserPrincipalName
	}
	name = info.DisplayName
	return
}

// FindOrCreateAccount looks up or creates an account linked to the OAuth provider identity.
// Order: (1) existing oauth link → (2) match by email → (3) create new account with viewer role.
func (s *oauthService) FindOrCreateAccount(ctx context.Context, provider, providerUid, email, name string) (*model.Account, error) {
	// 1. Check existing OAuth link
	var oauthRow model.AccountOAuth
	err := g.DB().Model("account_oauth").
		Where("provider = ? AND provider_uid = ?", provider, providerUid).
		Scan(&oauthRow)
	if err != nil && err.Error() != "sql: no rows in result set" {
		return nil, fmt.Errorf("oauth lookup failed: %w", err)
	}
	if oauthRow.AccountId != 0 {
		return Account().GetById(ctx, oauthRow.AccountId)
	}

	// 2. Match by email if provided
	if email != "" {
		var account model.Account
		err = g.DB().Model("account").Where("email = ?", email).Scan(&account)
		if err != nil && err.Error() != "sql: no rows in result set" {
			return nil, fmt.Errorf("email lookup failed: %w", err)
		}
		if account.AccountId != 0 {
			// Link this existing account to the OAuth provider
			_, linkErr := g.DB().Model("account_oauth").Data(g.Map{
				"account_id":   account.AccountId,
				"provider":     provider,
				"provider_uid": providerUid,
				"email":        email,
				"name":         name,
				"create_time":  time.Now().Unix(),
				"update_time":  time.Now().Unix(),
			}).Insert()
			if linkErr != nil {
				g.Log().Warning(ctx, "Failed to link OAuth provider to existing account:", linkErr)
			}
			return &account, nil
		}
	}

	// 3. Create a new account
	// Build a unique username: provider_<first8charsOfUid>
	baseUsername := provider + "_" + providerUid
	if len(baseUsername) > 32 {
		baseUsername = baseUsername[:32]
	}
	username := baseUsername
	// Ensure uniqueness
	for i := 1; i <= 10; i++ {
		exists, checkErr := Account().UsernameExists(ctx, username)
		if checkErr != nil {
			return nil, checkErr
		}
		if !exists {
			break
		}
		username = fmt.Sprintf("%s_%d", baseUsername, i)
	}

	// Use a random unusable password (OAuth users cannot log in via password)
	randomPass := guid.S() + guid.S()

	accountId, err := Account().Create(ctx, &model.Account{
		Username: username,
		Password: randomPass,
		Email:    email,
		Status:   1,
		Language: "en",
	})
	if err != nil {
		return nil, fmt.Errorf("failed to create OAuth account: %w", err)
	}

	// Assign viewer role
	viewerRoleIdVal, roleErr := g.DB().Model("role").Where("role_name = ?", "viewer").Value("role_id")
	if roleErr == nil && viewerRoleIdVal != nil {
		_ = Account().AssignRole(ctx, accountId, viewerRoleIdVal.Int64())
	}

	// Link OAuth provider
	_, _ = g.DB().Model("account_oauth").Data(g.Map{
		"account_id":   accountId,
		"provider":     provider,
		"provider_uid": providerUid,
		"email":        email,
		"name":         name,
		"create_time":  time.Now().Unix(),
		"update_time":  time.Now().Unix(),
	}).Insert()

	return Account().GetById(ctx, accountId)
}
