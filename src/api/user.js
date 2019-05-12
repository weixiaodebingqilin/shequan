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
 * @return {Object} res 
 */
export const getCode = (mobile,type) => service.post(`${prev}/user/sendsms/${mobile}?type=${type}`);


/**
 * loginMessage 短信验证码登陆
 * @param {[String,Number]} code 
 * @param {Object} data 
 * @return {Object} res 
 */
export const loginMessage = (code,data) => service.post(`${prev}/user/login?code=${code}`,data);

/**
 * loginPassword 短信验证码登陆
 * @param {Object} data 
 * @return {Object} res 
 */
export const loginPassword = (data) => service.post(`${prev}/user/login`,data);

/**
 * restPassword 重置密码
 * @param {[String,Number]} code 
 * @param {Object} data 
 * @return {Object} res 
 */
export const restPassword = (code,data) => service.post(`${prev}/user/reset?code=${code}`,data);
