/**
  * lazy-com
  * (c) 2019 heytoo
  */
import LazyCom from './lazy-com.vue'
const lazyCom = {}

/**
 * Plugin API
 */
// eslint-disable-next-line no-unused-vars
lazyCom.install = function (Vue, options) {
  Vue.component(LazyCom.name, LazyCom)
}

lazyCom.component = LazyCom

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lazyCom)
}

export default lazyCom
