import { createApp } from 'vue'
import App from './App.vue'
import VueSlider from '../lib'

const app = createApp(App)
app.component('VueSlider', VueSlider)
app.config.performance = false
app.mount('#app')
