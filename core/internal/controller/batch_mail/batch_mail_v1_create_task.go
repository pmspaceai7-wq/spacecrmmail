package batch_mail

import (
	"billionmail-core/internal/consts"
	"billionmail-core/internal/service/batch_mail"
	"billionmail-core/internal/service/public"
	rbac "billionmail-core/internal/service/rbac"
	"context"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"

	"billionmail-core/api/batch_mail/v1"
	"billionmail-core/internal/service/email_template"
)

func (c *ControllerV1) CreateTask(ctx context.Context, req *v1.CreateTaskReq) (res *v1.CreateTaskRes, err error) {
	res = &v1.CreateTaskRes{}

	if err = validateCreateTaskRequest(req); err != nil {
		res.SetError(err)
		return
	}

	// check template exists and belongs to current user
	template, err := email_template.GetTemplate(ctx, req.TemplateId)
	if err != nil {
		res.Code = 500
		res.SetError(gerror.New(public.LangCtx(ctx, "Failed to get template")))
		return
	}
	if template == nil {
		res.Code = 400
		res.SetError(gerror.New(public.LangCtx(ctx, "Template not found")))
		return
	}
	if !rbac.IsAdminAccount(ctx) {
		ownerVal, _ := g.DB().Model("email_templates").
			Where("id", req.TemplateId).
			Value("account_id")
		if ownerVal.Int64() != rbac.GetCurrentAccountId(ctx) {
			res.Code = 403
			res.SetError(gerror.New(public.LangCtx(ctx, "Template not found")))
			return
		}
	}

	addType := 0
	// create task and import recipients
	res.Data.Id, err = batch_mail.CreateTaskWithRecipients(ctx, req, addType)
	if err != nil {
		res.SetError(err)
		return
	}

	_ = public.WriteLog(ctx, public.LogParams{
		Type: consts.LOGTYPE.Task,
		Log:  "Create task :" + req.Subject + " successfully",
		Data: req,
	})

	res.SetSuccess(public.LangCtx(ctx, "Task created successfully"))
	return
}

func validateCreateTaskRequest(req *v1.CreateTaskReq) error {

	if req.GroupId <= 0 {
		return gerror.New("Must select a contact group")
	}

	if len(req.TagIds) > 0 {
		if req.TagLogic != "" && req.TagLogic != "AND" && req.TagLogic != "OR"  && req.TagLogic != "NOT" {
			return gerror.New("Tag logic must be AND or OR or NOT")
		}

		if req.TagLogic == "" {
			req.TagLogic = "AND"
		}
	}

	return nil
}
