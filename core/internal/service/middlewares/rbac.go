package middlewares

import (
	"billionmail-core/internal/model"
	"billionmail-core/internal/service/public"
	"context"
	"strings"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/text/gregex"
	"github.com/gogf/gf/v2/util/gconv"

	"billionmail-core/internal/service/rbac"
)

// PathToRouteInfo converts path to module, action, and resource
func PathToRouteInfo(path string) (module, action, resource string) {
	// Extract module
	modules := []string{
		"account", "role", "permission",
		"domains", "mail_boxes", "overview", "dockerapi",
		"contact", "email_template", "batch_mail", "files",
		"abnormal_recipient", "languages", "mail_services",
		"relay", "settings", "subscribe_list", "operation_log",
		"askai", "tags", "video_outreach",
	}
	for _, m := range modules {
		if strings.Contains(path, "/"+m+"/") || strings.HasSuffix(path, "/"+m) {
			module = m
			break
		}
	}

	// Extract action and resource
	pattern := `/api/(\w+)/(\w+)(?:/.*)?`
	match, err := gregex.MatchString(pattern, path)
	if err == nil && len(match) >= 3 {
		resource = match[1]
		actionName := match[2]

		// Map HTTP method to CRUD action if action is a standard CRUD
		switch actionName {
		case "list", "detail":
			action = "read"
		case "create":
			action = "create"
		case "update":
			action = "update"
		case "delete":
			action = "delete"
		default:
			action = actionName
		}
	}

	return
}

// RBACMiddleware handles permission verification for HTTP requests
type RBACMiddleware struct {
	PermissionService rbac.IPermission
}

// NewRBACMiddleware creates a new RBACMiddleware
func NewRBACMiddleware() *RBACMiddleware {
	return &RBACMiddleware{
		PermissionService: rbac.Permission(),
	}
}

// PermissionCheck checks if the current user has the required permission
func (m *RBACMiddleware) PermissionCheck(r *ghttp.Request) {
	// Skip permission check for public/auth routes (must match jwt.go bypass list)
	if r.URL.Path == "/api/login" ||
		r.URL.Path == "/api/refresh-token" ||
		r.URL.Path == "/api/get_validate_code" ||
		r.URL.Path == "/api/languages/get" ||
		r.URL.Path == "/api/languages/set" ||
		r.URL.Path == "/api/unsubscribe" ||
		r.URL.Path == "/api/unsubscribe_new" ||
		r.URL.Path == "/api/unsubscribe/user_group" ||
		r.URL.Path == "/api/batch_mail/api/send" ||
		r.URL.Path == "/api/batch_mail/api/batch_send" ||
		r.URL.Path == "/api/subscribe/submit" ||
		r.URL.Path == "/api/subscribe/confirm" ||
		r.URL.Path == "/api/oauth/initiate" ||
		r.URL.Path == "/api/oauth/callback" ||
		r.URL.Path == "/api/oauth/callback/microsoft" ||
		r.URL.Path == "/api/current-user" {
		r.Middleware.Next()
		return
	}

	// Extract account ID from context — nil means unauthenticated
	if r.GetCtxVar("accountId") == nil {
		r.Response.WriteJson(public.CodeMap[401])
		r.Exit()
		return
	}

	// Get roles from context — may be []model.Role, []string, or []interface{}
	rolesVal := r.GetCtxVar("roles").Val()
	isAdmin := false
	roleNames := []string{}
	switch rv := rolesVal.(type) {
	case []model.Role:
		for _, role := range rv {
			roleNames = append(roleNames, role.RoleName)
			if role.RoleName == "admin" {
				isAdmin = true
			}
		}
	default:
		roleNames = gconv.Strings(rv)
		for _, s := range roleNames {
			if s == "admin" {
				isAdmin = true
				break
			}
		}
	}
	if isAdmin {
		r.Middleware.Next()
		return
	}

	// Modules that require admin role — non-admins are always denied
	adminOnlyModules := map[string]bool{
		"account":       true,
		"role":          true,
		"permission":    true,
		"relay":         true,
		"settings":      true,
		"operation_log": true,
		"mail_services": true,
		"dockerapi":     true,
	}

	// Extract module from path to determine if admin-only
	module, _, _ := PathToRouteInfo(r.URL.Path)

	if adminOnlyModules[module] {
		r.Response.WriteJson(g.Map{
			"code": 403,
			"msg":  "Insufficient permissions",
		})
		r.Exit()
		return
	}

	// Any authenticated user (with or without roles) can access non-admin-only modules.
	// Accounts created before viewer role existed may have no roles but are still valid users.
	if !adminOnlyModules[module] {
		r.Middleware.Next()
		return
	}

	// Admin-only module, non-admin user — deny
	r.Response.WriteJson(g.Map{
		"code": 403,
		"msg":  "Insufficient permissions",
	})
	r.Exit()
}

// HasPermission checks if the current user has a specific permission
func HasPermission(ctx context.Context, module, action, resource string) bool {
	accountId := rbac.GetCurrentAccountId(ctx)
	if accountId == 0 {
		return false
	}

	// Get roles from context
	rolesVar := ctx.Value("roles")
	roles := []string{}
	if rolesVar != nil {
		roles = rolesVar.([]string)
	}

	// Check for admin role (has all permissions)
	for _, role := range roles {
		if role == "admin" {
			return true
		}
	}

	// Check specific permission
	permissionService := rbac.Permission()
	hasPermission, err := permissionService.Check(ctx, accountId, module, action, resource)
	if err != nil {
		g.Log().Error(ctx, "Permission check error:", err)
		return false
	}

	return hasPermission
}

// RequirePermission returns a middleware handler that checks for a specific permission
// RequirePermission middleware checks if user has required permission
func RequirePermission(module, action, resource string) ghttp.HandlerFunc {
	return func(r *ghttp.Request) {
		if !HasPermission(r.GetCtx(), module, action, resource) {
			r.Response.WriteJson(g.Map{
				"code": 403,
				"msg":  "Insufficient permissions",
			})
			r.Exit()
			return
		}
		r.Middleware.Next()
	}
}
