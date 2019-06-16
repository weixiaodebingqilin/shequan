const components = []
const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component)
    });
}
/* 全局 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
