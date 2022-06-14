import 'core-js/modules/es.array.flat-map'
import 'core-js/modules/es.object.entries'
import 'core-js/modules/es.object.values'

import Vue from 'vue'
import App from './App.vue'
import VueSlider from '../lib'
import '../lib/theme/default.scss'

Vue.component('VueSlider', VueSlider)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
