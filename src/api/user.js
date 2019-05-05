import service from './fetch.js'
const prev = 'user'

/**
 * regist 注册
 * @method {post}
 * @param {String} code 
 * @param {Object} data
 * @return {Object} res 
 */
export const regist = (code, data) => service.post(`${prev}/user/register/${code}`,data);

/**
 * getCode 获取短信验证码
 * @param {[String,Number]} mobile 
 * 
 * @return {Object} res 
 */
export const getCode = (mobile) => service.post(`${prev}/user/sendsms/${mobile}`);
