import Switch from './components/switch'
import { dkSelect, dkOption, dkOptionGroup } from './components/select';

const components = {
    Switch,
    SwitchGroup: Switch.Group,
    dkOption: dkOption,
    dkOptionGroup,
    dkSelect
}
const install = (Vue) => {
    Object.keys(components).map((key) => {
        const component = components[key]
        Vue.component(component.name, component)
    })

    // Vue.prototype.$message = Message
    // Vue.prototype.$notice = Notice
    // Vue.prototype.$create = create
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const Duck = {
    version: 1.01,
    install,
    ...components
}

// Object.keys(components).map((key) => {
//     const component = components[key]
//     Dk[component.name] = component
// })

export default Duck;
