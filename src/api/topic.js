import service from './fetch.js'
const prev = '/topic'

/**
 * createTopic 新增主题圈
 * @method {post}
 * @param {Object} data
 * @return {Object} res 
 */
export const createTopic = (data) => service.post(`${prev}/topic`, data);

/**
 * getMyTopic 查询我创建的主题圈
 * @method {get}
 * @param {String,Number} userid
 * @return {Object} res 
 */
export const getMyTopic = (userid) => service.get(`${prev}/topic/user/${userid}`);

/**
 * getTopicList 查询主题圈列表,结果分页
 * @method {post}
 * @param {Object} data
 * @return {Object} res 
 */
export const getTopicList = (data) => service.post(`${prev}/topic/search/${data.page}/${data.size}`, data);

/**
 * getTopicDetails 根据主题圈id获取主题圈详细信息
 * @method {get}
 * @param {String,Number} id
 * @return {Object} res 
 */
export const getTopicDetails = (id) => service.get(`${prev}/topic/${id}`);

/**
 * getTopicDetails 根据主题圈id 修改主题圈
 * @method {put}
 * @param {Object} data
 * @return {Object} res 
 */
export const puTopicDetails = (data) => service.put(`${prev}/topic/${data.id}`,data);