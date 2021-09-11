import nodeAPI from '@/configs/axios';

/**
 * Get list of sneakers
 *
 * @returns {Promise} List of sneakers
 */
export function getSneakers() {
  return nodeAPI.get('/sneakers');
}

/**
 * Post pair of sneakers
 *
 * @param {object} data - data on a pair of sneakers
 * @returns {Promise} Status of posting
 */
export function postSneakers(data) {
  return nodeAPI.post('/sneakers', data);
}
