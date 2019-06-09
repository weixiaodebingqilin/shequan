import service from './fetch.js'
const prev = '/topic'

/**
 * createTopic 新增主题圈
 * @method {post}
 * @param {Object} data
 * @return {Object} res 
 */
export const createTopic = (data) => service.post(`${prev}/topic`, data);
