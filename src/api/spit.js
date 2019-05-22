import service from './fetch.js'
const prev = '/spit'

/**
 * spitAdd 新增评论
 * @method {post}
 * @param {Object} data
 * @return {Object} res 
 */
export const spitAdd = (data) => service.post(`${prev}/spit`, data);

/**
 * spitQuery 查询评论
 * @method {ge't}
 * @return {Object} res 
 */
export const spitQuery = () => service.get(`${prev}/spit`);
