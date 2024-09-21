import { createApp } from 'vue'
import router from '@/router'
import Kui from '@kamona-ui/vue'
import App from '@/App'
import '@kamona-ui/vue/style/kui-vue.css'
import '@/assets/css/main.css'

const app = createApp(App)
app.use(router)
app.use(Kui)
app.mount('#app')
