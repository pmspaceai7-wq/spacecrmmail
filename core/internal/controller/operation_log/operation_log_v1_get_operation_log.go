package operation_log

import (
	"billionmail-core/api/operation_log/v1"
	"billionmail-core/internal/model/entity"
	"billionmail-core/internal/service/public"
	rbac "billionmail-core/internal/service/rbac"
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"strconv"
	"time"
)

func (c *ControllerV1) GetOperationLog(ctx context.Context, req *v1.GetOperationLogReq) (res *v1.GetOperationLogRes, err error) {
	res = &v1.GetOperationLogRes{}

	// Determine if current user is admin
	currentAccountId := public.GetCurrentAccountId(ctx)
	roles, _ := rbac.Account().GetAccountRoles(ctx, currentAccountId)
	isAdmin := false
	for _, r := range roles {
		if r.RoleName == "admin" {
			isAdmin = true
			break
		}
	}

	// build query conditions
	model := g.DB().Model("bm_operation_logs").Safe()

	// Non-admins can only see their own log entries
	if !isAdmin {
		model = model.Where("user_id = ?", currentAccountId)
	}

	// add keyword fuzzy search (log, ip fields)
	if req.Keyword != "" {
		model = model.Where("(log LIKE ? OR ip LIKE ?)", "%"+req.Keyword+"%", "%"+req.Keyword+"%")
	}

	// type filter
	if req.Type != "" && req.Type != "all" {
		model = model.Where("type", req.Type)
	}

	if req.StartTime > 0 && req.EndTime <= 0 {
		req.EndTime = int(time.Now().Unix())
	}

	if req.StartTime > 0 {
		model = model.WhereGTE("addtime", req.StartTime)
	}
	if req.EndTime > 0 {
		model = model.WhereLTE("addtime", req.EndTime)
	}

	// get total count
	total, err := model.Count()
	if err != nil {
		return nil, err
	}

	// query by page
	var list []entity.OperationLog
	err = model.Page(req.Page, req.PageSize).
		OrderDesc("id").
		Scan(&list)
	if err != nil {
		return nil, err
	}

	var accounts []struct {
		AccountId int64  `json:"account_id" dc:"Account ID"`
		Username  string `json:"username"   dc:"Username"`
	}
	err = g.DB().Model("account").Fields("account_id", "username").Scan(&accounts)
	if err != nil {
		return nil, err
	}

	userMap := make(map[string]string)
	for _, acc := range accounts {
		userIDStr := strconv.FormatInt(acc.AccountId, 10)
		userMap[userIDStr] = acc.Username
	}

	for i, item := range list {
		userIDStr := strconv.FormatInt(item.UserId, 10)

		if username, ok := userMap[userIDStr]; ok {
			list[i].UserName = username
		} else {
			list[i].UserName = "unknown"
		}
	}

	res.Data.Total = total
	res.Data.List = list
	res.SetSuccess(public.LangCtx(ctx, "Get operation logs successfully"))
	return res, nil
}
