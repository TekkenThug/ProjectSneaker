import axios from '@/configs/axios';

/**
 * Get not approved sneakers
 *
 * @returns {Promise} List of sneakers
 */
export const getNotApprovedSneakers = () => {
  return axios.get('/admin/sneakers').then((res) => res.data);
};

/**
 * Send a request for acceptance / cancellation of the application
 *
 * @param {string} id - identifier of sneakers
 * @param {boolean} resolve - status of resolve
 * @returns {Promise} Status of resolving
 */
export const approveOrRejectSneakers = (id, resolve) => {
  return axios.post('/admin/sneakers/resolve', { id, resolve }).then((res) => res.data);
};

export default {
  getNotApprovedSneakers,
  approveOrRejectSneakers,
};
