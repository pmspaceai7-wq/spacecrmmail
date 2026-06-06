package entity

// AccountOAuth defines the OAuth provider link entity
type AccountOAuth struct {
	Id          int64  `json:"id"           dc:"Primary key"`
	AccountId   int64  `json:"account_id"   dc:"Linked account ID"`
	Provider    string `json:"provider"     dc:"OAuth provider: google, microsoft"`
	ProviderUid string `json:"provider_uid" dc:"Stable subject/oid from the provider"`
	Email       string `json:"email"        dc:"Email from provider"`
	Name        string `json:"name"         dc:"Display name from provider"`
	CreateTime  int64  `json:"create_time"  dc:"Creation time"`
	UpdateTime  int64  `json:"update_time"  dc:"Update time"`
}
