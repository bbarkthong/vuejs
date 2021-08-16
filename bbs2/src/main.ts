import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// import { BootstrapVue } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue)
  .mount('#app')
