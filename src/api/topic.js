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
