package v1

import (
	"billionmail-core/utility/types/api_v1"
	"github.com/gogf/gf/v2/frame/g"
)

// LoginReq defines the request for user login
type LoginReq struct {
	g.Meta         `path:"/login" method:"post" tags:"Authentication" summary:"User login" sm:"User login" in:"body"`
	Username       string `p:"username" v:"required#Username cannot be empty" dc:"Username"`
	Password       string `p:"password" v:"required#Password cannot be empty" dc:"Password"`
	ValidateCodeId string `p:"validate_code_id" v:"min-length:1" dc:"Validation code ID"`
	ValidateCode   string `p:"validate_code" v:"min-length:1" dc:"Validation code"`
}

// LoginRes defines the response for user login
type LoginRes struct {
	api_v1.StandardRes
	Data struct {
		Token        string   `json:"token" dc:"JWT token"`
		RefreshToken string   `json:"refreshToken" dc:"Refresh token"`
		TTL          int64    `json:"ttl" dc:"Token lifetime (in seconds)"`
		Roles        []string `json:"roles" dc:"User roles"`
		AccountInfo  struct {
			Id       int64  `json:"id" dc:"Account ID"`
			Username string `json:"username" dc:"Username"`
			Email    string `json:"email" dc:"Email address"`
			Status   int    `json:"status" dc:"Account status"`
			Lang     string `json:"lang" dc:"Preferred language"`
		} `json:"accountInfo" dc:"Basic account information"`
	} `json:"data"`
}

// LogoutReq defines the request for user logout
type LogoutReq struct {
	g.Meta        `path:"/logout" method:"post" tags:"Authentication" summary:"User logout" sm:"User logout" in:"body"`
	Authorization string `json:"authorization" dc:"Authorization" in:"header"`
}

// LogoutRes defines the response for user logout
type LogoutRes struct {
	api_v1.StandardRes
}

// RefreshTokenReq defines the request for token refresh
type RefreshTokenReq struct {
	g.Meta       `path:"/refresh-token" method:"post" tags:"Authentication" summary:"Refresh access token" sm:"Refresh access token" in:"body"`
	RefreshToken string `p:"refreshToken" v:"required#Refresh token cannot be empty" dc:"Refresh token"`
}

// RefreshTokenRes defines the response for token refresh
type RefreshTokenRes struct {
	api_v1.StandardRes
	Data struct {
		Token        string `json:"token" dc:"New JWT token"`
		RefreshToken string `json:"refreshToken" dc:"New refresh token"`
		TTL          int64  `json:"ttl" dc:"Token lifetime (in seconds)"`
	} `json:"data"`
}

// GetValidateCodeReq defines the request for getting validation code
type GetValidateCodeReq struct {
	g.Meta `path:"/get_validate_code" method:"get" tags:"Authentication" summary:"Get validation code" sm:"Get validation code" in:"query"`
}

// GetValidateCodeRes defines the response for getting validation code
type GetValidateCodeRes struct {
	api_v1.StandardRes
	Data struct {
		MustValidateCode   bool   `json:"mustValidateCode" dc:"Must Validate Code"`
		LoginRetries       int    `json:"loginRetries" dc:"Login retries"`
		MaxLoginRetries    int    `json:"maxLoginRetries" dc:"Max login retries"`
		ValidateCodeBase64 string `json:"validateCodeBase64" dc:"Validation code in base64 format"`
		ValidateCodeId     string `json:"validateCodeId" dc:"Validation code ID"`
	} `json:"data"`
}

// CurrentUserReq defines the request for getting current user info
type CurrentUserReq struct {
	g.Meta        `path:"/current-user" method:"get" tags:"Authentication" summary:"Get current user info" sm:"Get current user info" in:"query"`
	Authorization string `json:"authorization" dc:"Authorization" in:"header"`
}

// CurrentUserRes defines the response for getting current user info
type CurrentUserRes struct {
	api_v1.StandardRes
	Data struct {
		Account struct {
			Id       int64  `json:"id" dc:"Account ID"`
			Username string `json:"username" dc:"Username"`
			Email    string `json:"email" dc:"Email address"`
			Status   int    `json:"status" dc:"Account status"`
			Lang     string `json:"lang" dc:"Preferred language"`
		} `json:"account" dc:"Account information"`
		Roles       []string `json:"roles" dc:"User roles"`
		Permissions []string `json:"permissions" dc:"User permissions"`
	} `json:"data"`
}

// OAuthInitiateReq starts the OAuth authorization flow
type OAuthInitiateReq struct {
	g.Meta   `path:"/oauth/initiate" method:"get" tags:"Authentication" summary:"Initiate OAuth login" sm:"Initiate OAuth login" in:"query"`
	Provider string `p:"provider" v:"required|in:google,microsoft#Provider is required|Unsupported provider" dc:"OAuth provider (google or microsoft)"`
}

// OAuthInitiateRes returns the redirect URL to the provider
type OAuthInitiateRes struct {
	api_v1.StandardRes
	Data struct {
		RedirectURL string `json:"redirectUrl" dc:"OAuth provider authorization URL"`
	} `json:"data"`
}

// OAuthCallbackReq handles the provider redirect callback
type OAuthCallbackReq struct {
	g.Meta   `path:"/oauth/callback" method:"get" tags:"Authentication" summary:"OAuth callback" sm:"OAuth callback" in:"query"`
	Provider string `p:"provider" v:"required" dc:"OAuth provider"`
	Code     string `p:"code" v:"required" dc:"Authorization code from provider"`
	State    string `p:"state" v:"required" dc:"CSRF state token"`
}

// OAuthCallbackRes — handler redirects on success; this is only returned on error
type OAuthCallbackRes struct {
	api_v1.StandardRes
}

// OAuthCallbackMicrosoftReq handles Microsoft's path-based redirect (Azure forbids query strings)
type OAuthCallbackMicrosoftReq struct {
	g.Meta `path:"/oauth/callback/microsoft" method:"get" tags:"Authentication" summary:"Microsoft OAuth callback" sm:"Microsoft OAuth callback" in:"query"`
	Code   string `p:"code" v:"required" dc:"Authorization code from Microsoft"`
	State  string `p:"state" v:"required" dc:"CSRF state token"`
}

// OAuthCallbackMicrosoftRes — handler redirects on success; this is only returned on error
type OAuthCallbackMicrosoftRes struct {
	api_v1.StandardRes
}
