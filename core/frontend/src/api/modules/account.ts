import { instance } from '@/api'

export interface AccountListParams {
	page?: number
	pageSize?: number
	username?: string
	email?: string
	status?: number
}

export interface AccountCreateParams {
	username: string
	password: string
	email: string
	roleIds?: number[]
	status?: number
	lang?: string
}

export interface AccountUpdateParams {
	accountId: number
	username?: string
	email?: string
	roleIds?: number[]
	status?: number
	lang?: string
}

export interface AccountPasswordParams {
	accountId: number
	oldPassword?: string
	newPassword: string
}

export const getAccountList = (params: AccountListParams) => {
	return instance.get('/account/list', { params })
}

export const getAccountDetail = (accountId: number) => {
	return instance.get('/account/detail', { params: { accountId } })
}

export const createAccount = (params: AccountCreateParams) => {
	return instance.post('/account/create', params)
}

export const updateAccount = (params: AccountUpdateParams) => {
	return instance.post('/account/update', params)
}

export const updateAccountPassword = (params: AccountPasswordParams) => {
	return instance.post('/account/password', params)
}

export const deleteAccount = (accountId: number) => {
	return instance.post('/account/delete', { accountId })
}
