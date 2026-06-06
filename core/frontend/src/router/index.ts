import { useGlobalStore, useUserStore } from '@/store'
import { setLanguage } from '@/i18n'
import { clearPendingRequests } from '@/api'
import { routes } from '@/router/router'
import router from '@/router/router'
import loadingBar from '@/config/loadingBar'
import type { RouteRecordRaw } from 'vue-router'

// Route white list
const whitePathList = ['/login', '/oauth/callback']

// Check if a route (or any of its ancestors) is marked adminOnly
function isAdminOnlyRoute(path: string, routeList: RouteRecordRaw[]): boolean {
	for (const route of routeList) {
		if (route.meta?.adminOnly) {
			// This top-level route is admin-only — check if the target path starts with it
			if (path === route.path || path.startsWith(route.path + '/')) {
				return true
			}
		}
		if (route.children) {
			for (const child of route.children) {
				const childPath = child.path.startsWith('/') ? child.path : route.path + '/' + child.path
				if (child.meta?.adminOnly && (path === childPath || path.startsWith(childPath + '/'))) {
					return true
				}
			}
		}
	}
	return false
}

router.beforeEach(async (to, from, next) => {
	loadingBar.start()

	clearPendingRequests()

	const globalStore = useGlobalStore()

	// Set the language
	try {
		await globalStore.getLang()
		setLanguage(globalStore.lang)
	} catch {
		setLanguage(globalStore.lang)
	}

	// Check if the visited route exists in the registered routes
	const routeExists = routes.some(route => route.path === to.path)

	// If the route does not exist, go directly
	if (!routeExists) {
		next()
		return
	}

	const userStore = useUserStore()

	// User is logged in
	if (userStore.isLogin) {
		// If the visited route is in the white list, jump to the home page
		if (whitePathList.includes(to.path)) {
			next('/')
			return
		}

		// Block non-admins from navigating directly to admin-only routes
		if (isAdminOnlyRoute(to.path, routes) && !userStore.isAdmin) {
			next('/overview')
			return
		}

		next()
	} else if (whitePathList.includes(to.path)) {
		// If the visited route is in the white list, go directly
		next()
	} else {
		next('/login')
	}
})

router.afterEach(() => {
	loadingBar.finish()
})

export default router
