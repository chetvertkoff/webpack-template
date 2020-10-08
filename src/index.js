import Vue from 'vue'
import App from './App/App'

import './sass/test.sass'
import './js/common.js'

new Vue({
  render: h => h(App)
}).$mount('#app')

