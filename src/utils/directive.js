/* eslint-disable no-console */
import Vue from 'vue'

Vue.directive('lazy', {
    // 只调用一次，指令第一次绑定到元素时调用
    bind: function (el) {
        console.log('elbind: ', el)
    },
    // 当被绑定的元素插入到 DOM 中时…… 。被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)。
    inserted: function (el, binding, vnode) {
        // 聚焦元素
        console.log('inserted: ', el)
        console.log('binding: ', binding)
        console.log('vnode: ', vnode)
    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有
    update: function (el) {
        console.log('update: ', el)
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated: function (el) {
        console.log('componentUpdated: ', el)
    },
    // 只调用一次，指令与元素解绑时调用。
    unbind: function (el) {
        console.log('unbind: ', el)
    }
})
