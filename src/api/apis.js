import service from './fetch.js'

export const regist = (code) => service.get(`/user/register/${code}`)