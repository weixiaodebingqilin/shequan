// localStorage 的生命周期  人为的： 1.创建 2.修改  3.销毁（初始化）
/**
 * 初始化 localStorage
 * 在回到登录页面的时候应当初始化（token过期时会回到登录页）
 * 如果有404；400等页面  也应该初始化
 */
/**
 * 初始化token
 */
// export const romveToken = () => {
//     localStorage.removeItem("token")
// }

// export const initAllStorage = () => {
//     romveToken()
// }

/**
 * 混入到app.vue里面 通过provide达到全局变量的作用
 */
export default {
    methods: {
        setToken(value) {
            localStorage.setItem('token', value)
            Cookies.set('token', value, { expires: 7, path: '' });
        },
        romveToken() {
            localStorage.removeItem("token")
            Cookies.set('token', '', { expires: -1, path: '' });
        },
        initAllStorage() {
            this.romveToken()
        },
    }
}
