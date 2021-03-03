import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import Mock from './mock'

const app = new Vue({
  ...App
})
app.$mount()
