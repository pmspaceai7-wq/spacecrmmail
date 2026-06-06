<template>
	<div class="accounts-page">
		<div class="page-header">
			<h2 class="page-title">{{ t('settings.accounts.title') }}</h2>
			<n-button type="primary" @click="openCreateModal">
				{{ t('settings.accounts.createAccount') }}
			</n-button>
		</div>

		<n-data-table
			:columns="columns"
			:data="accountList"
			:loading="tableLoading"
			:pagination="pagination"
			remote
			@update:page="handlePageChange" />

		<!-- Create / Edit Modal -->
		<n-modal
			v-model:show="showFormModal"
			preset="dialog"
			:title="editingAccount ? t('settings.accounts.editAccount') : t('settings.accounts.createAccount')"
			style="width: 480px"
			@after-leave="resetForm">
			<n-form ref="formRef" :model="form" :rules="formRules" label-placement="left" label-width="100px">
				<n-form-item :label="t('settings.accounts.form.username')" path="username">
					<n-input v-model:value="form.username" :disabled="!!editingAccount" />
				</n-form-item>
				<n-form-item v-if="!editingAccount" :label="t('settings.accounts.form.password')" path="password">
					<n-input v-model:value="form.password" type="password" show-password-on="click" />
				</n-form-item>
				<n-form-item :label="t('settings.accounts.form.email')" path="email">
					<n-input v-model:value="form.email" />
				</n-form-item>
				<n-form-item :label="t('settings.accounts.form.roles')" path="roleIds">
					<n-select
						v-model:value="form.roleIds"
						multiple
						:options="roleOptions"
						value-field="value"
						label-field="label" />
				</n-form-item>
				<n-form-item :label="t('settings.accounts.form.status')" path="status">
					<n-select
						v-model:value="form.status"
						:options="statusOptions" />
				</n-form-item>
			</n-form>
			<template #action>
				<n-button @click="showFormModal = false">{{ t('common.cancel') }}</n-button>
				<n-button type="primary" :loading="formLoading" @click="handleSave">{{ t('common.save') }}</n-button>
			</template>
		</n-modal>

		<!-- Reset Password Modal -->
		<n-modal
			v-model:show="showPasswordModal"
			preset="dialog"
			:title="t('settings.accounts.resetPassword')"
			style="width: 420px"
			@after-leave="resetPasswordForm">
			<n-form ref="passwordFormRef" :model="passwordForm" :rules="passwordRules" label-placement="left" label-width="120px">
				<n-form-item :label="t('settings.accounts.form.newPassword')" path="newPassword">
					<n-input v-model:value="passwordForm.newPassword" type="password" show-password-on="click" />
				</n-form-item>
			</n-form>
			<template #action>
				<n-button @click="showPasswordModal = false">{{ t('common.cancel') }}</n-button>
				<n-button type="primary" :loading="passwordLoading" @click="handleResetPassword">{{ t('common.save') }}</n-button>
			</template>
		</n-modal>
	</div>
</template>

<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, NSpace, useMessage, useDialog } from 'naive-ui'
import {
	getAccountList,
	getAccountDetail,
	createAccount,
	updateAccount,
	updateAccountPassword,
	deleteAccount,
} from '@/api/modules/account'
import { isObject } from '@/utils'

const { t } = useI18n()
const message = useMessage()
const dialog = useDialog()

interface AccountRow {
	id: number
	username: string
	email: string
	status: number
	language: string
	create_time: number
}

interface RoleOption {
	value: number
	label: string
}

const tableLoading = ref(false)
const accountList = ref<AccountRow[]>([])
const totalCount = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)

const roleOptions = ref<RoleOption[]>([])
const statusOptions = [
	{ value: 1, label: 'Enabled' },
	{ value: 0, label: 'Disabled' },
]

const showFormModal = ref(false)
const formLoading = ref(false)
const editingAccount = ref<AccountRow | null>(null)
const formRef = ref()

const form = reactive({
	username: '',
	password: '',
	email: '',
	roleIds: [] as number[],
	status: 1,
})

const formRules = {
	username: { required: true, message: 'Username is required', trigger: 'blur' },
	password: { required: true, message: 'Password is required', trigger: 'blur' },
	email: [
		{ required: true, message: 'Email is required', trigger: 'blur' },
		{ type: 'email', message: 'Invalid email format', trigger: 'blur' },
	],
}

const showPasswordModal = ref(false)
const passwordLoading = ref(false)
const passwordTargetId = ref<number | null>(null)
const passwordFormRef = ref()
const passwordForm = reactive({ newPassword: '' })
const passwordRules = {
	newPassword: { required: true, message: 'New password is required', trigger: 'blur' },
}

const pagination = computed(() => ({
	page: currentPage.value,
	pageSize: pageSize.value,
	itemCount: totalCount.value,
	showSizePicker: false,
}))

const columns: DataTableColumns<AccountRow> = [
	{ title: 'Username', key: 'username' },
	{ title: 'Email', key: 'email' },
	{
		title: 'Status',
		key: 'status',
		render(row) {
			return h(NTag, { type: row.status === 1 ? 'success' : 'error', size: 'small' }, {
				default: () => (row.status === 1 ? 'Enabled' : 'Disabled'),
			})
		},
	},
	{
		title: 'Actions',
		key: 'actions',
		render(row) {
			return h(NSpace, {}, {
				default: () => [
					h(NButton, { size: 'small', onClick: () => openEditModal(row) }, { default: () => 'Edit' }),
					h(NButton, { size: 'small', onClick: () => openPasswordModal(row.id) }, { default: () => 'Reset Password' }),
					h(NButton, { size: 'small', type: 'error', onClick: () => confirmDelete(row) }, { default: () => 'Delete' }),
				],
			})
		},
	},
]

const loadAccounts = async () => {
	tableLoading.value = true
	try {
		const res = await getAccountList({ page: currentPage.value, pageSize: pageSize.value })
		if (isObject<{ list: AccountRow[]; total: number }>(res)) {
			accountList.value = res.list
			totalCount.value = res.total
		}
	} finally {
		tableLoading.value = false
	}
}

const loadRoles = async (accountId?: number) => {
	const res = await getAccountDetail(accountId ?? 0).catch(() => null)
	if (isObject<{ allRoles: { id: number; name: string }[] }>(res)) {
		roleOptions.value = res.allRoles.map(r => ({ value: r.id, label: r.name }))
	}
}

const handlePageChange = (page: number) => {
	currentPage.value = page
	loadAccounts()
}

const openCreateModal = async () => {
	editingAccount.value = null
	await loadRoles()
	showFormModal.value = true
}

const openEditModal = async (row: AccountRow) => {
	editingAccount.value = row
	const res = await getAccountDetail(row.id)
	if (isObject<{ account: AccountRow; roles: { id: number; name: string }[]; allRoles: { id: number; name: string }[] }>(res)) {
		roleOptions.value = res.allRoles.map(r => ({ value: r.id, label: r.name }))
		form.username = res.account.username
		form.email = res.account.email
		form.status = res.account.status
		form.roleIds = res.roles.map(r => r.id)
	}
	showFormModal.value = true
}

const resetForm = () => {
	form.username = ''
	form.password = ''
	form.email = ''
	form.roleIds = []
	form.status = 1
	editingAccount.value = null
}

const handleSave = async () => {
	try {
		await formRef.value?.validate()
		formLoading.value = true
		if (editingAccount.value) {
			await updateAccount({
				accountId: editingAccount.value.id,
				username: form.username,
				email: form.email,
				roleIds: form.roleIds,
				status: form.status,
			})
			message.success('Account updated')
		} else {
			await createAccount({
				username: form.username,
				password: form.password,
				email: form.email,
				roleIds: form.roleIds,
				status: form.status,
			})
			message.success('Account created')
		}
		showFormModal.value = false
		loadAccounts()
	} catch {
		// validation errors shown inline
	} finally {
		formLoading.value = false
	}
}

const openPasswordModal = (id: number) => {
	passwordTargetId.value = id
	showPasswordModal.value = true
}

const resetPasswordForm = () => {
	passwordForm.newPassword = ''
	passwordTargetId.value = null
}

const handleResetPassword = async () => {
	try {
		await passwordFormRef.value?.validate()
		if (!passwordTargetId.value) return
		passwordLoading.value = true
		await updateAccountPassword({
			accountId: passwordTargetId.value,
			newPassword: passwordForm.newPassword,
		})
		message.success('Password updated')
		showPasswordModal.value = false
	} catch {
		// validation errors shown inline
	} finally {
		passwordLoading.value = false
	}
}

const confirmDelete = (row: AccountRow) => {
	dialog.warning({
		title: 'Delete Account',
		content: `Delete account "${row.username}"? This action cannot be undone.`,
		positiveText: 'Delete',
		negativeText: 'Cancel',
		onPositiveClick: async () => {
			await deleteAccount(row.id)
			message.success('Account deleted')
			loadAccounts()
		},
	})
}

onMounted(() => {
	loadAccounts()
})
</script>

<style lang="scss" scoped>
.accounts-page {
	padding: 24px;
}

.page-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}

.page-title {
	font-size: 20px;
	font-weight: 600;
	margin: 0;
}
</style>
