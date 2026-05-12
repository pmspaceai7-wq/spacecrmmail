import { createApp } from 'vue'
import i18n from '@/i18n'
import pinia from '@/store'
import router from '@/router'
import App from '@/App.vue'

import '@unocss/reset/normalize.css'
import '@/styles/uno.css'
import '@/styles/index.scss'

const app = createApp(App)

app.config.errorHandler = (err, _instance, info) => {
	console.error('[Vue errorHandler]', info, err)
}
window.addEventListener('error', e => console.error('[window.error]', e.error || e.message))
window.addEventListener('unhandledrejection', e => console.error('[unhandledrejection]', e.reason))

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#root')

export { app }
