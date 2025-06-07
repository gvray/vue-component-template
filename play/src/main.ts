import { createApp } from 'vue'
import App from './App.vue'
import VueComponents from '@vue-components/components'

const app = createApp(App)
app.use(VueComponents)
app.mount('#app')
