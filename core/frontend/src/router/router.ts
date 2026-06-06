import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isDev } from '@/utils'

// Routes reflect list
const routesReflectList = [
	'Overview',
	'Email Marketing',
	'template',
	'Send API',
	'Contacts',
	'Sequences',
	'Leads',
	'Enrichment',
	'MailDomain',
	'MailBoxes',
	'SMTP',
	'Logs',
	'Settings',
	'Automation',
	'Video Outreach',
]

// Import routes from modules
const modules = import.meta.webpackContext('./modules', {
	// Whether to search for subdirectories
	recursive: false,
	regExp: /^\.\/[^.]+\.ts$/,
})

// Module routes
export let menuList: RouteRecordRaw[] = []

// Iterate through the module list to generate module routes
for (const path of modules.keys()) {
	const mod = modules(path) as { default?: RouteRecordRaw }
	if (mod && mod.default && (mod.default as RouteRecordRaw).path) {
		menuList.push(mod.default)
	}
}

// Sort module routes
menuList = menuList.reduce((p: RouteRecordRaw[], v: RouteRecordRaw) => {
	const routeIndex = routesReflectList.findIndex(item => item == v.meta!.title)
	p[routeIndex] = v
	return p
}, [] as RouteRecordRaw[])

// Drop sparse holes (entries in routesReflectList that have no matching module)
menuList = menuList.filter(Boolean)

const otherArray: RouteRecordRaw[] = []

if (isDev) {
	otherArray.push({
		path: '/test',
		name: 'Test',
		component: () => import('@/views/test/index.vue'),
	})
}

export const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
	},
	{
		path: '/oauth/callback',
		name: 'OAuthCallback',
		component: () => import('@/views/login/oauth-callback.vue'),
	},
	{
		path: '/',
		redirect: '/overview',
	},
	...menuList,
	...otherArray,
]

const router = createRouter({
	history: createWebHistory('/'),
	routes,
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
