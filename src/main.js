import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
