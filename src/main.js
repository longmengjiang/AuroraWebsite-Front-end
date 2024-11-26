import { createApp } from 'vue'
import pinia from '@/store'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/css/initialize.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
