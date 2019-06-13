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
 * articleDetailQuery 根据文章id查询文章详情
 * @method {get} 
 * @param {String} id 
 * @return {Object} res 
 */
export const articleDetailQuery = (id) => service.get(`${prev}/article/${id}`);
/**
 * articleQuery 查询文章列表
 * @method {post} 
 * @param {Object} data 
 * @return {Object} res 
 */
export const articleListQuery = (data) => service.post(`${prev}/article/search/${data.page}/${data.size}`, data);

/**
 * articleQueryBykey 根据关键字查询文章
 * @method {get} 
 * @param {object} data [key page size]
 * @return {Object} res 
 */
export const articleQueryBykey = (data) => service.get(`search/article/${data.key}/${data.page}/${data.size}`);


/**
 * articleUpdate 增加文章
 * @method {put}
 * @param {Object} data  
 * @return {Object} res 
 */
export const articleUpdate = (data) => service.put(`${prev}/article/${data.aid}`, data);
