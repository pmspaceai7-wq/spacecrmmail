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

				<n-divider class="oauth-divider">{{ t('login.form.orContinueWith') }}</n-divider>

				<div class="oauth-buttons">
					<n-button
						class="oauth-btn"
						size="large"
						:loading="oauthLoading === 'google'"
						:disabled="oauthLoading !== null"
						@click="handleOAuth('google')">
						<template #icon>
							<svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M47.532 24.552c0-1.636-.138-3.2-.395-4.704H24v8.92h13.222c-.57 3.067-2.302 5.664-4.908 7.41v6.158h7.944c4.645-4.28 7.274-10.586 7.274-17.784z" fill="#4285F4"/>
								<path d="M24 48c6.624 0 12.182-2.196 16.242-5.948l-7.944-6.158c-2.196 1.472-5.004 2.34-8.298 2.34-6.384 0-11.79-4.31-13.722-10.104H2.08v6.364C6.116 42.892 14.484 48 24 48z" fill="#34A853"/>
								<path d="M10.278 28.13A14.96 14.96 0 0 1 9.454 24c0-1.432.246-2.824.824-4.13V13.506H2.08A23.97 23.97 0 0 0 0 24c0 3.874.924 7.536 2.08 10.494l8.198-6.364z" fill="#FBBC05"/>
								<path d="M24 9.538c3.6 0 6.828 1.238 9.372 3.668l7.026-7.026C36.178 2.196 30.624 0 24 0 14.484 0 6.116 5.108 2.08 13.506l8.198 6.364C12.21 13.848 17.616 9.538 24 9.538z" fill="#EA4335"/>
							</svg>
						</template>
						{{ t('login.form.continueWithGoogle') }}
					</n-button>

					<n-button
						class="oauth-btn"
						size="large"
						:loading="oauthLoading === 'microsoft'"
						:disabled="oauthLoading !== null"
						@click="handleOAuth('microsoft')">
						<template #icon>
							<svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="1" y="1" width="9" height="9" fill="#F25022"/>
								<rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
								<rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
								<rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
							</svg>
						</template>
						{{ t('login.form.continueWithMicrosoft') }}
					</n-button>
				</div>
			</n-form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { isObject } from '@/utils'
import { getValidateCode, login, oauthInitiate } from '@/api/modules/user'

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
	roles?: string[]
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
				roles: res.roles ?? [],
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

const oauthLoading = ref<string | null>(null)

const handleOAuth = async (provider: string) => {
	oauthLoading.value = provider
	try {
		const res = await oauthInitiate(provider)
		if (isObject<{ redirectUrl: string }>(res)) {
			window.location.href = res.redirectUrl
		}
	} catch {
		oauthLoading.value = null
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

.oauth-divider {
	margin: 16px 0 12px;
}

.oauth-buttons {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
}

.oauth-btn {
	width: 100%;
	justify-content: center;
}
</style>
