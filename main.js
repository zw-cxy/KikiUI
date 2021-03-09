import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import Mock from './kiki-ui/mock'
Vue.prototype.log = function(arg1, arg2) {
  if (arguments.length === 1) {
    console.log(JSON.stringify(arg1, null, 2))
  } else {
    console.log(arg1 + '\n' + JSON.stringify(arg2, null, 2))
  }
}

const app = new Vue({
  ...App
})
app.$mount()
