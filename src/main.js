import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import './utils/directive.js'

// 全局样式
import './assets/style/base.css'

import lazyCom from './components/publick/lazy-com/lazy-com.js'
Vue.use(lazyCom)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
