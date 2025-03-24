import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ScrollTop from 'primevue/scrolltop'

const app = createApp(App)
app.use(router)

app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})

app.component('DataTable', DataTable)
app.component('PrimeColumn', Column)
app.component('ScrollTop', ScrollTop)

app.mount('#app')
