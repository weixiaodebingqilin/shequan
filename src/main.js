// 全局样式
import './assets/style/base.css'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App.vue'
import './utils/local/cookies.js' // 引入cookies
import router from './router/index.js'

import './utils/directive.js'
// import './utils/iconfont.js'

import { Button, Select, Option, Upload, Input, Radio, Dialog, Alert, Notification } from 'element-ui'
Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Button).use(Dialog)
Vue.use(Select).use(Option).use(Upload).use(Input)
Vue.use(Radio)
Vue.use(Alert).use(Notification)



import lazyCom from './components/publick/lazy-com/lazy-com.js'
Vue.use(lazyCom);

import Duck from './components/duck/index.js';
Vue.use(Duck)

Vue.config.productionTip = false
/// router
const jurisdiction = ['/mine']
router.beforeEach((to, from, next) => {
    let token = Cookies.get('token')
    if (!token && jurisdiction.includes(from)) {
        //失效
        let logins = ['/register', '/forgot', '/login']
        if (logins.includes(to.path)) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        //未失效 
        next()
    }
})
// init Vue
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
