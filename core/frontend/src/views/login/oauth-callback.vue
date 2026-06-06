<template>
	<div class="oauth-callback-container">
		<div class="callback-card">
			<n-spin size="large" :show="loading" />
			<p class="callback-message">{{ message }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { getCurrentUser } from '@/api/modules/user'
import { isObject } from '@/utils'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const loading = ref(true)
const message = ref('Authenticating...')

interface CurrentUserResponse {
	roles: string[]
}

onMounted(async () => {
	const { token, refreshToken, ttl, error } = route.query as Record<string, string>

	if (error) {
		loading.value = false
		const errorMessages: Record<string, string> = {
			invalid_state: 'Authentication failed: invalid or expired session. Please try again.',
			exchange_failed: 'Authentication failed: could not verify your identity with the provider.',
			account_error: 'Authentication failed: could not retrieve or create your account.',
			account_disabled: 'Your account is disabled. Please contact the administrator.',
			roles_error: 'Authentication failed: could not load account permissions.',
			token_error: 'Authentication failed: could not generate session token.',
		}
		message.value = errorMessages[error] || 'Authentication failed. Please try again.'
		setTimeout(() => router.push('/login'), 3000)
		return
	}

	if (token && refreshToken && ttl) {
		// Store token first so getCurrentUser request is authenticated
		userStore.setLoginInfo({
			token,
			refresh_token: refreshToken,
			ttl: Number(ttl),
		})

		// Fetch roles so sidebar filtering works immediately
		try {
			const userRes = await getCurrentUser()
			if (isObject<CurrentUserResponse>(userRes)) {
				userStore.setLoginInfo({
					token,
					refresh_token: refreshToken,
					ttl: Number(ttl),
					roles: userRes.roles,
				})
			}
		} catch {
			// roles default to [] — non-admin view is safe fallback
		}

		message.value = 'Login successful! Redirecting...'
		loading.value = false
		setTimeout(() => router.push('/'), 500)
	} else {
		loading.value = false
		message.value = 'Authentication failed: missing token data. Redirecting to login...'
		setTimeout(() => router.push('/login'), 2000)
	}
})
</script>

<style lang="scss" scoped>
.oauth-callback-container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: var(--app-gradient);
}

.callback-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	background-color: var(--color-bg-1);
	padding: 48px 40px;
	border-radius: 16px;
	box-shadow: 0 20px 50px -20px rgba(168, 85, 247, 0.35);
}

.callback-message {
	font-size: 16px;
	color: var(--color-text-1);
	text-align: center;
	max-width: 320px;
}
</style>
