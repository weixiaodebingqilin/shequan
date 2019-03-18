import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import './assets/style/base.css'
Vue.use(ElementUI, {size: 'mini'})
Vue.config.productionTip = false
// 引用全局less
// require('!style-loader!css-loader!less-loader!./style/glob.less')
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
