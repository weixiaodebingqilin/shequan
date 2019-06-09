import service from './fetch.js'
const prev = '/base'
// 上传七牛云
export const uploadQi = () => service.post(`${prev}/upload/yun`)
