## 说明
- 在 Vue.js 1.x 中，提供了两个方法：$dispatch 和 $broadcast 。
- $dispatch用于向上级派发事件，只要是它的父级（一级或多级以上），都可以在组件内通过 $on （或 events，2.x 已废弃）监听到。
- $broadcast相反，是由上级向下级广播事件的
- 这两种方法一旦发出事件后，任何组件都是可以接收到的，就近原则，而且会在第一次接收到后停止冒泡，除非返回 true。

- 这两个方法虽然看起来很好用，但是在 Vue.js 2.x 中都废弃了，官方给出的解释是：

     因为基于组件树结构的事件流方式有时让人难以理解，并且在组件结构扩展的过程中会变得越来越脆弱。

- 虽然在业务开发中，它没有 Vuex 这样专门管理状态的插件清晰好用，但对独立组件（库）的开发，绝对是福音。因为独立组件一般层级并不会很复杂，并且剥离了业务，不会变的难以维护。

## 自实现

通过目前已知的信息，我们要实现的 dispatch 和 broadcast 方法，将具有以下功能：

- 在子组件调用 dispatch 方法，向上级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该上级组件已预先通过 $on 监听了这个事件；
- 相反，在父组件调用 broadcast 方法，向下级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该下级组件已预先通过 $on 监听了这个事件。

实现这对方法的关键点在于，如何正确地向上或向下找到对应的组件实例，并在它上面触发方法。在设计一个新功能（features）时，可以先确定这个功能的 API 是什么，也就是说方法名、参数、使用样例，确定好 API，再来写具体的代码。
