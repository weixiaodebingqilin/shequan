// localStorage 的生命周期  人为的： 1.创建 2.修改  3.销毁（初始化）
/**
 * 初始化 localStorage
 * 在回到登录页面的时候应当初始化（token过期时会回到登录页）
 * 如果有404；400等页面  也应该初始化
 */
/**
 * 初始化token
 */
export const initToken = () => {
    localStorage.removeItem("token")
}

export const initAllStorage = () => {
    initToken()
}
