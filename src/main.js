import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './utils/directive.js'
// import './components/componentRegister.js'
// 全局样式
import './assets/style/base.css'
// Vue.use(ElementUI, {size: 'mini'})
// const lazyCom = require('./components/publick/lazy-com/lazy-com.js')
import lazyCom from './components/publick/lazy-com/lazy-com.js'
Vue.use(lazyCom)
Vue.config.productionTip = false
// 引用全局less
// require('!style-loader!css-loader!less-loader!./style/glob.less')
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
