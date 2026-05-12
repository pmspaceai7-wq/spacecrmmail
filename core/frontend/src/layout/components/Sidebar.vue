<template>
	<n-layout-sider
		collapse-mode="width"
		:collapsed="isCollapse"
		:width="200"
		:collapsed-width="64"
		:content-style="{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			overflow: 'hidden',
		}">
		<!-- 应用标志和名称 -->
		<div class="app-logo" :class="{ collapse: isCollapse }">
			<a href="/">
				<img class="icon" src="@/assets/images/logo.png"></img>
				<span v-show="!isCollapse" class="app-name">SPACE CRM</span>
			</a>
		</div>

		<!-- 导航菜单 -->
		<div class="nav-section">
			<n-menu
				:value="activeMenuKey"
				:collapsed="isCollapse"
				:collapsed-width="64"
				:options="menuOptions"
				:root-indent="24"
				@update:value="handleUpdateMenu">
			</n-menu>
		</div>
		<!-- 退出登录 -->
		<div class="footer-section">
			<n-menu
				value=""
				:collapsed="isCollapse"
				:collapsed-width="64"
				:options="logoutOptions"
				:root-indent="24"
				@update:value="handleUpdateMenu">
			</n-menu>
		</div>
	</n-layout-sider>
</template>

<script lang="tsx" setup>
import { VNodeChild } from 'vue'
import { MenuOption } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useMenuStore, useGlobalStore, useUserStore } from '@/store'
import { menuList } from '@/router/router'

const { t } = useI18n()

const route = useRoute()

const menuStore = useMenuStore()
const userStore = useUserStore()
const globalStore = useGlobalStore()

const { isCollapse } = storeToRefs(globalStore)

// 当前菜单名称
const activeMenuKey = computed(() => {
	return String(route.meta?.key || '')
})

// 路由菜单
const routerMenus = computed(() => {
	return menuStore.menuList.filter(route => route.meta && !route.meta.hidden)
})

// 导航菜单选项
const menuOptions = computed(() => {
	return routerMenus.value.map(route => {
		const name = String(route.children?.[0]?.name || '')
		const key = String(route.meta?.key || '')
		const titleKey = String(route.meta?.titleKey || '')
		const title = titleKey ? t(titleKey) : String(route.meta?.title || '')
		return {
			key,
			label: () => renderLabel(name, title),
			icon: () => renderIcon(key),
		}
	})
})

const logoutOptions = ref<MenuOption[]>([
	{
		key: 'logout',
		label: () => <span class="ml-10px">{t('layout.menu.logout')}</span>,
		icon: () => renderIcon('logout'),
	},
])

const renderLabel = (name: string, title: string) => {
	return (
		<RouterLink class="flex items-center" to={{ name }}>
			<span>{title}</span>
		</RouterLink>
	)
}

const iconMap: Record<string, VNodeChild> = {
	overview: <i class="i-mdi-web"></i>,
	market: <i class="i-mdi-email-fast-outline"></i>,
	api: <i class="i-mdi-chart-line"></i>,
	contacts: <i class="i-mdi-account-multiple-outline"></i>,
	sequences: <i class="i-mdi-email-sync-outline"></i>,
	leads: <i class="i-mdi-account-search-outline"></i>,
	enrichment: <i class="i-mdi-database-search-outline"></i>,
	domain: <i class="i-mdi-web"></i>,
	mailbox: <i class="i-custom:mailbox"></i>,
	smtp: <i class="i-custom:smtp"></i>,
	settings: <i class="i-mdi-cog-outline"></i>,
	template: <i class="i-mdi-cog-outline"></i>,
	logs: <i class="i-mdi-clipboard-text-outline"></i>,
	'video-outreach': <i class="i-mdi-video-outline"></i>,
	logout: <i class="i-mdi-logout"></i>,
}

const renderIcon = (key: string) => {
	return iconMap[key]
}

const handleUpdateMenu = (key: string) => {
	if (key === 'logout') {        
		userStore.logout()
	}
	if (key === 'webmail') {
		const route = routerMenus.value.find(item => item.meta?.key === 'webmail')
		if (route) {
			const href = String(route.meta?.href)
			window.open(href)
		}
	}
}

onMounted(() => {
	menuStore.setMenuList(menuList)
})
</script>

<style lang="scss" scoped>
.n-layout-sider {
	box-shadow: 4px 0 24px -8px rgba(168, 85, 247, 0.12);
	z-index: 1010;
	background: var(--color-bg-1);
}

.app-logo {
	display: flex;
	padding: 20px 24px;
	border-bottom: 1px solid var(--color-border-1);
	transition: all 0.3s ease;
	background: linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);

	&.collapse {
		justify-content: center;
		padding: 20px 0;
	}

	a {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
	}

	.icon {
		width: 38px;
		filter: drop-shadow(0 2px 8px rgba(236, 72, 153, 0.28));
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.06) rotate(-3deg);
		}
	}

	.app-name {
		font-size: 20px;
		font-weight: 800;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
}

.nav-section {
	flex: 1;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background: var(--color-border-2);
		border-radius: 2px;
	}
}

.footer-section {
	border-top: 1px solid var(--color-border-1);
	transition: all 0.3s ease;
}

.n-menu {
	--n-item-height: 48px;
	--n-font-size: 14px;
	padding: 16px 12px;

	:deep(.n-menu-item) {
		margin-top: 0;
		margin-bottom: 6px;

		&:last-of-type {
			margin-bottom: 0;
		}

		.n-menu-item-content {
			padding-right: 24px;
			line-height: 24px;
			border-radius: 10px;
			font-weight: 600;
			transition:
				background 0.25s ease,
				transform 0.2s ease,
				box-shadow 0.25s ease;
			position: relative;
			overflow: hidden;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%) scaleY(0);
				width: 3px;
				height: 60%;
				border-radius: 0 3px 3px 0;
				background: linear-gradient(180deg, #ec4899 0%, #a855f7 100%);
				transition: transform 0.25s ease;
			}

			&:hover {
				background: linear-gradient(
					90deg,
					rgba(236, 72, 153, 0.10) 0%,
					rgba(168, 85, 247, 0.06) 100%
				) !important;
				transform: translateX(2px);

				.n-menu-item-content__icon {
					transform: scale(1.1);
				}
			}

			&.n-menu-item-content--selected {
				background: linear-gradient(
					90deg,
					rgba(236, 72, 153, 0.16) 0%,
					rgba(168, 85, 247, 0.10) 100%
				) !important;
				box-shadow: 0 4px 14px -4px rgba(236, 72, 153, 0.22);

				&::before {
					transform: translateY(-50%) scaleY(1);
				}
			}

			.n-menu-item-content__icon {
				transition: transform 0.2s ease;
			}
		}
	}
}
</style>
