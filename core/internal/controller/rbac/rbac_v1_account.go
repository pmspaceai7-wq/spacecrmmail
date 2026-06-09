package rbac

import (
	v1 "billionmail-core/api/rbac/v1"
	"billionmail-core/internal/model"
	service "billionmail-core/internal/service/rbac"
	"context"
	"fmt"

	"github.com/gogf/gf/v2/errors/gerror"
)

// AccountList returns a paginated list of accounts
func (c *ControllerV1) AccountList(ctx context.Context, req *v1.AccountListReq) (res *v1.AccountListRes, err error) {
	res = &v1.AccountListRes{}

	accounts, total, err := service.Account().GetList(ctx, req.Page, req.PageSize, req.Username, req.Email, req.Status)
	if err != nil {
		err = gerror.New("Failed to get account list")
		return
	}

	list := make([]v1.AccountInfoItem, 0, len(accounts))
	for _, a := range accounts {
		list = append(list, v1.AccountInfoItem{
			Id:                a.AccountId,
			Username:          a.Username,
			Email:             a.Email,
			Status:            a.Status,
			Language:          a.Language,
			CreateTime:        a.CreateTime,
			ShareAdminDomains: a.ShareAdminDomains,
		})
	}

	res.Success = true
	res.Code = 0
	res.Msg = "Retrieved successfully"
	res.Data.List = list
	res.Data.Total = total
	res.Data.Page = req.Page
	return
}

// AccountDetail returns details for a single account including its roles
func (c *ControllerV1) AccountDetail(ctx context.Context, req *v1.AccountDetailReq) (res *v1.AccountDetailRes, err error) {
	res = &v1.AccountDetailRes{}

	allRoles, err := service.Account().GetAll(ctx)
	if err != nil {
		err = gerror.New("Failed to get all roles")
		return
	}

	allRoleItems := make([]v1.RoleInfoItem, 0, len(allRoles))
	for _, r := range allRoles {
		allRoleItems = append(allRoleItems, v1.RoleInfoItem{
			Id:          r.RoleId,
			Name:        r.RoleName,
			Description: r.Description,
			Status:      r.Status,
			CreateTime:  r.CreateTime,
		})
	}

	res.Data.AllRoles = allRoleItems

	// accountId=0 means "create modal" — only return allRoles
	if req.AccountId == 0 {
		res.Success = true
		res.Code = 0
		res.Msg = "Retrieved successfully"
		return
	}

	account, err := service.Account().GetById(ctx, req.AccountId)
	if err != nil || account == nil {
		err = gerror.New("Account not found")
		return
	}

	roles, err := service.Account().GetAccountRoles(ctx, req.AccountId)
	if err != nil {
		err = gerror.New("Failed to get account roles")
		return
	}

	roleItems := make([]v1.RoleInfoItem, 0, len(roles))
	for _, r := range roles {
		roleItems = append(roleItems, v1.RoleInfoItem{
			Id:          r.RoleId,
			Name:        r.RoleName,
			Description: r.Description,
			Status:      r.Status,
			CreateTime:  r.CreateTime,
		})
	}

	res.Success = true
	res.Code = 0
	res.Msg = "Retrieved successfully"
	res.Data.Account = v1.AccountInfoItem{
		Id:                account.AccountId,
		Username:          account.Username,
		Email:             account.Email,
		Status:            account.Status,
		Language:          account.Language,
		CreateTime:        account.CreateTime,
		ShareAdminDomains: account.ShareAdminDomains,
	}
	res.Data.Roles = roleItems
	return
}

// AccountCreate creates a new account and assigns roles
func (c *ControllerV1) AccountCreate(ctx context.Context, req *v1.AccountCreateReq) (res *v1.AccountCreateRes, err error) {
	res = &v1.AccountCreateRes{}

	usernameExists, err := service.Account().UsernameExists(ctx, req.Username)
	if err != nil {
		err = gerror.New("Failed to check username")
		return
	}
	if usernameExists {
		err = fmt.Errorf("Username already exists")
		return
	}

	emailExists, err := service.Account().EmailExists(ctx, req.Email)
	if err != nil {
		err = gerror.New("Failed to check email")
		return
	}
	if emailExists {
		err = fmt.Errorf("Email already exists")
		return
	}

	lang := req.Lang
	if lang == "" {
		lang = "en"
	}
	status := req.Status
	if status == 0 {
		status = 1
	}

	accountId, err := service.Account().Create(ctx, &model.Account{
		Username:          req.Username,
		Password:          req.Password,
		Email:             req.Email,
		Status:            status,
		Language:          lang,
		ShareAdminDomains: req.ShareAdminDomains,
	})
	if err != nil {
		err = gerror.New("Failed to create account")
		return
	}

	if len(req.RoleIds) > 0 {
		if bindErr := service.Account().BindRoles(ctx, accountId, req.RoleIds); bindErr != nil {
			service.Account().Delete(ctx, accountId)
			err = gerror.New("Failed to assign roles")
			return
		}
	}

	res.Success = true
	res.Code = 0
	res.Msg = "Account created successfully"
	res.Data.AccountId = accountId
	return
}

// AccountUpdate updates account info and role assignments
func (c *ControllerV1) AccountUpdate(ctx context.Context, req *v1.AccountUpdateReq) (res *v1.AccountUpdateRes, err error) {
	res = &v1.AccountUpdateRes{}

	account, err := service.Account().GetById(ctx, req.AccountId)
	if err != nil || account == nil {
		err = gerror.New("Account not found")
		return
	}

	if req.Username != "" {
		account.Username = req.Username
	}
	if req.Email != "" {
		account.Email = req.Email
	}
	if req.Status != 0 {
		account.Status = req.Status
	}
	if req.Lang != "" {
		account.Language = req.Lang
	}
	if req.ShareAdminDomains != nil {
		account.ShareAdminDomains = *req.ShareAdminDomains
	}

	if err = service.Account().Update(ctx, account); err != nil {
		err = gerror.New("Failed to update account")
		return
	}

	if req.RoleIds != nil {
		if err = service.Account().BindRoles(ctx, req.AccountId, req.RoleIds); err != nil {
			err = gerror.New("Failed to update roles")
			return
		}
	}

	res.Success = true
	res.Code = 0
	res.Msg = "Account updated successfully"
	return
}

// AccountPassword changes an account password
func (c *ControllerV1) AccountPassword(ctx context.Context, req *v1.AccountPasswordReq) (res *v1.AccountPasswordRes, err error) {
	res = &v1.AccountPasswordRes{}

	// If old password provided, verify it (non-admin self-update flow)
	if req.OldPassword != "" {
		account, getErr := service.Account().GetById(ctx, req.AccountId)
		if getErr != nil || account == nil {
			err = gerror.New("Account not found")
			return
		}
		if !service.Account().VerifyPassword(account.Password, req.OldPassword) {
			err = fmt.Errorf("Old password is incorrect")
			return
		}
	}

	if err = service.Account().UpdatePassword(ctx, req.AccountId, req.NewPassword); err != nil {
		err = gerror.New("Failed to update password")
		return
	}

	res.Success = true
	res.Code = 0
	res.Msg = "Password updated successfully"
	return
}

// AccountDelete deletes an account, guarding against removing the last admin
func (c *ControllerV1) AccountDelete(ctx context.Context, req *v1.AccountDeleteReq) (res *v1.AccountDeleteRes, err error) {
	res = &v1.AccountDeleteRes{}

	isAdmin, _ := service.Account().IsAdmin(ctx, req.AccountId)

	if isAdmin {
		adminCount, countErr := service.Account().CountAdmins(ctx)
		if countErr != nil {
			err = gerror.New("Failed to count admin accounts")
			return
		}
		if adminCount <= 1 {
			err = fmt.Errorf("Cannot delete the last admin account")
			return
		}
	}

	if err = service.Account().Delete(ctx, req.AccountId); err != nil {
		err = gerror.New("Failed to delete account")
		return
	}

	res.Success = true
	res.Code = 0
	res.Msg = "Account deleted successfully"
	return
}
