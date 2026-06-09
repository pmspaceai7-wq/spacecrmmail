<template>
	<n-layout-header>
		<div class="header-left">
			<n-button class="icon-btn" :bordered="false" @click="handleCollapse">
				<i class="icon" :class="isCollapse ? 'i-mdi-menu-close' : 'i-mdi-menu-open'"></i>
			</n-button>
			<n-button type="primary" text class="text-14px" @click="handleGoIssues">
				{{ t('layout.header.submit') }}
				<i class="i-mdi:arrow-right ml-1px"></i>
			</n-button>
		</div>

		<div class="header-right">
			<n-button text class="header-text-btn" @click="handleSetTheme">
				{{ theme === 'light' ? '🌙' : '☀️' }}
			</n-button>
			<n-dropdown
				v-if="langOptions.length > 0"
				size="large"
				:options="langOptions"
				@select="handleLangAction">
				<n-button text class="header-text-btn">
					🌐 {{ t('layout.header.language') || 'Lang' }}
				</n-button>
			</n-dropdown>
			<InstanceSwitcher />
			<n-dropdown size="large" :options="userOptions" @select="handleUserAction">
				<n-button text class="header-text-btn">
					{{ username || t('layout.menu.account') || 'Account' }} ▾
				</n-button>
			</n-dropdown>
		</div>
	</n-layout-header>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { DropdownOption } from 'naive-ui'
import { useUserStore, useGlobalStore, useThemeStore } from '@/store'
import InstanceSwitcher from './InstanceSwitcher.vue'

const { t } = useI18n()

const userStore = useUserStore()
const { username } = storeToRefs(userStore)

const globalStore = useGlobalStore()
const { isCollapse, langList } = storeToRefs(globalStore)

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const handleCollapse = () => {
	globalStore.setCollapse()
}

const handleGoIssues = () => {
	window.open('https://github.com/aaPanel/BillionMail/issues')
}

const langOptions = computed<DropdownOption[]>(() =>
	langList.value.map(item => ({ label: item.cn, key: item.name }))
)

const userOptions = ref<DropdownOption[]>([
	{
		label: t('layout.menu.logout'),
		key: 'logout',
	},
])

const handleSetTheme = () => {
	themeStore.setTheme(theme.value === 'dark' ? 'light' : 'dark')
}

const handleLangAction = async (key: string) => {
	await globalStore.setLang(key)
	window.location.reload()
}

const handleUserAction = (key: string) => {
	switch (key) {
		case 'logout':
			userStore.logout()
			break
	}
}

</script>

<style lang="scss" scoped>
.n-layout-header {
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 48px;
	padding: 0 20px 0 12px;
	background: rgba(255, 255, 255, 0.85);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-bottom: 1px solid var(--color-border-1);
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	z-index: 1000;
	flex-shrink: 0;
}

:root[theme-mode='dark'] .n-layout-header {
	background: rgba(31, 18, 53, 0.85);
	border-bottom-color: var(--color-border-1);
}

.header-left,
.header-right {
	display: flex;
	align-items: center;
	gap: 8px;
}

.header-text-btn {
	font-size: 13px;
	font-weight: 500;
	color: var(--color-text-1);
	padding: 0 8px;
	height: 32px;
	cursor: pointer;

	&:hover {
		color: var(--color-primary-1);
	}
}

.icon-btn {
	--n-width: 42px;
	--n-height: 48px;
	--n-padding: 0;
	--n-font-size: 22px;
	--n-text-color: var(--color-text-1);
	--n-text-color-hover: var(--color-primary-1);
	--n-text-color-pressed: var(--color-primary-hover-1);
	--n-text-color-focus: var(--color-primary-1);
	--n-ripple-color: none;
	color: var(--color-text-1);
	min-width: 42px;
	min-height: 42px;

	:deep(.icon),
	:deep(i) {
		color: var(--color-text-1);
		font-size: 22px;
		width: 22px;
		height: 22px;
		display: inline-flex;
	}

	&:hover :deep(.icon),
	&:hover :deep(i) {
		color: var(--color-primary-1);
	}
}
</style>
