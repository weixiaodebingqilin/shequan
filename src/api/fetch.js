import axios from 'axios'

// import router from '@/router/index.js'

/**
 * 创建axios实例
 */
// axios.defaults.baseURL = 'http://114.116.11.4:8080'
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/sell/' : 'http://39.96.35.240:9012'
const service = axios.create({
    timeout: 60000 // 请求超时时间
})
/**
 * request拦截器
 */
const noToken = ['undefined', 'null']
service.interceptors.request.use(config => {
    console.log('config: ', config)
    let token = localStorage.getItem('token')
    if (token && !!token && !noToken.includes(token)) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
}, error => {
    return Promise.reject(error)
})
/**
 * 状态且提示
 */
// const errorStatus = {
//     '403': {
//         msg: '当前没权限',
//         path: '/403'
//     },
//     '500': '服务器无响应'
// }
/**
 * Response拦截器
 */
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const status = error.response.status
        // 401没权限时 重定向进入登录页面
        if (+status === 401) {
            // router.replace({ path: '/login'})
            return
        }
        // 其余状态时 仅报错提示
        return Promise.reject(error)
    }
)
export default service
