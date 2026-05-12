<template>
	<div class="login-container">
		<div class="login-card">
			<div class="logo-container">
				<div class="logo">
					<img class="w-full" src="@/assets/images/logo.png" />
				</div>
			</div>

			<h2 class="login-title">SPACE CRM</h2>

			<n-form ref="formRef" size="large" :model="form" :rules="rules">
				<n-form-item :show-label="false" path="username">
					<n-input v-model:value="form.username" :placeholder="t('login.form.usernamePlaceholder')">
					</n-input>
				</n-form-item>
				<n-form-item :show-label="false" path="password">
					<n-input
						v-model:value="form.password"
						class="password-input"
						type="password"
						show-password-on="click"
						:placeholder="t('login.form.passwordPlaceholder')"
						@keyup.enter="handleLogin">
					</n-input>
				</n-form-item>
				<n-form-item v-if="isCode" :show-label="false" path="validate_code">
					<n-input
						v-model:value="form.validate_code"
						class="flex-1"
						:placeholder="t('login.form.captcha')"
						:input-props="{ spellcheck: false }"
						@keydown.enter="handleLogin">
					</n-input>
					<n-spin size="small" :show="codeLoading">
						<div class="code" @click="getCode()">
							<img
								class="w-full h-full"
								:src="codeUrl"
								:title="t('login.form.changeCaptcha')"
								:alt="t('login.form.captcha')" />
						</div>
					</n-spin>
				</n-form-item>
				<n-form-item :show-label="false" :show-feedback="false">
					<n-button
						type="primary"
						size="large"
						class="font-bold"
						:loading="loading"
						:disabled="loading"
						:block="true"
						@click="handleLogin">
						{{ t('login.form.loginButton') }}
					</n-button>
				</n-form-item>
			</n-form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { isObject } from '@/utils'
import { getValidateCode, login } from '@/api/modules/user'

const { t } = useI18n()

const router = useRouter()
const userStore = useUserStore()

const formRef = useTemplateRef('formRef')

const isCode = ref(false)

const codeUrl = ref('')

const codeLoading = ref(false)

const form = reactive({
	username: '',
	password: '',
	validate_code: '',
	validate_code_id: '',
})

const rules = {
	username: {
		required: true,
		message: t('login.validation.usernameRequired'),
		trigger: ['blur', 'input'],
	},
	password: {
		required: true,
		message: t('login.validation.passwordRequired'),
		trigger: ['blur', 'input'],
	},
	validate_code: {
		required: true,
		trigger: ['blur', 'input'],
		message: t('login.validation.captchaRequired'),
	},
}

interface CodeResponse {
	mustValidateCode: boolean
	validateCodeBase64: string
	validateCodeId: string
}

const getCode = async () => {
	try {
		codeLoading.value = true
		const res = await getValidateCode()
		if (isObject<CodeResponse>(res)) {
			isCode.value = res.mustValidateCode
			if (res.mustValidateCode) {
				codeUrl.value = res.validateCodeBase64
				form.validate_code_id = res.validateCodeId
			}
		}
	} finally {
		codeLoading.value = false
	}
}

const loading = ref(false)

interface LoginResponse {
	token: string
	refresh_token: string
	ttl: number
}

const handleLogin = async () => {
	try {
		await formRef.value?.validate()
		loading.value = true
		const res = await login(toRaw(form))
		if (isObject<LoginResponse>(res)) {
			userStore.setLoginInfo({
				token: res.token,
				refresh_token: res.refresh_token,
				ttl: res.ttl,
			})
			setTimeout(() => {
				router.push('/')
			}, 1000)
		}
	} catch {
		getCode()
	} finally {
		loading.value = false
	}
}

getCode()
</script>

<style lang="scss" scoped>
.login-container {
	--text-dark: var(--color-text-1);
	--text-light: var(--color-text-2);
	--accent-pink: #ec4899;
	--accent-purple: #a855f7;
	--border-light: #f3e8ff;
}

.login-container {
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	background: var(--app-gradient);
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: -15%;
		right: -15%;
		width: 45vw;
		height: 45vw;
		border-radius: 50%;
		background: radial-gradient(circle, var(--accent-pink) 0%, rgba(236, 72, 153, 0) 70%);
		opacity: 0.55;
		z-index: 0;
	}
	&::after {
		content: '';
		position: absolute;
		left: -15%;
		bottom: -15%;
		width: 45vw;
		height: 45vw;
		border-radius: 50%;
		background: radial-gradient(circle, var(--accent-purple) 0%, rgba(168, 85, 247, 0) 70%);
		opacity: 0.55;
		z-index: 0;
	}
}

.login-card {
	width: 100%;
	max-width: 420px;
	background-color: var(--color-bg-1);
	padding: 56px 36px 64px;
	border-radius: 16px;
	box-shadow:
		0 20px 50px -20px rgba(168, 85, 247, 0.35),
		0 8px 24px -12px rgba(236, 72, 153, 0.18);
	z-index: 1;
	border: 1px solid var(--color-border-1);
}

.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;

	&-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.login-title {
	margin-top: 12px;
	margin-bottom: 36px;
	text-align: center;
	font-size: 28px;
	font-weight: 800;
	letter-spacing: -0.02em;
	background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
}

.code {
	width: 120px;
	height: 40px;
	margin-left: 12px;
	border-radius: 4px;
	border: 1px solid #dcdfe6;
	overflow: hidden;
	cursor: pointer;
}
</style>
