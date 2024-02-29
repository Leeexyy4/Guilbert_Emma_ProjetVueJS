import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).mount('#app')
