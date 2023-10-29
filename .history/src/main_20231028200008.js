import { createApp } from 'vue'

import '@/assets/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
