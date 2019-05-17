import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/directive.js'
import './utils/iconfont.js'
import { Button, Select, Option, Upload, Input, Radio, Dialog } from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Button).use(Dialog)
Vue.use(Select).use(Option).use(Upload).use(Input)

Vue.use(Radio)
// 全局样式
import './assets/style/base.css'

import lazyCom from './components/publick/lazy-com/lazy-com.js'
Vue.use(lazyCom)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
