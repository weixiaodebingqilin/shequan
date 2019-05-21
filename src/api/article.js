import service from './fetch.js'
const prev = 'article'

/**
 * articleAdd 增加文章
 * @method {post}
 * @param {Object} data  
 * @return {Object} res 
 */
export const articleAdd = (data) => service.post(`${prev}/article`, data);

/**
 * articleQuery 查询文章
 * @method {get} 
 * @return {Object} res 
 */
export const articleQuery = () => service.get(`${prev}/article`);

/**
 * articleQueryBykey 根据关键字查询文章
 * @method {get} 
 * @param {object} data [key page size]
 * @return {Object} res 
 */
export const articleQueryBykey = (data) => service.get(`search/article/${data.key}/${data.page}/${data.size}`);
