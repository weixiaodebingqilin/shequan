import Switch from './components/switch'
import { Select, Option, OptionGroup } from './components/select';
import Progress from './components/progress';
import Upload from './components/upload';
import Message from './components/message';
const components = {
    Switch,
    SwitchGroup: Switch.Group,
    Option: Option,
    OptionGroup,
    Select,
    Progress,
    Upload,
    Message
}
const install = (Vue) => {
    Object.keys(components).map((key) => {
        const component = components[key]
        Vue.component(component.name, component)
    })

    Vue.prototype.$Message = Message;
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
