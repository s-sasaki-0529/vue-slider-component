import 'core-js/modules/es.array.flat-map'
import 'core-js/modules/es.object.entries'
import 'core-js/modules/es.object.values'

import { createApp } from 'vue'
import App from './App.vue'
import VueSlider from '../lib'
import '../lib/theme/default.scss'

const app = createApp(App)
app.component('VueSlider', VueSlider)
app.config.performance = false
app.mount('#app')
