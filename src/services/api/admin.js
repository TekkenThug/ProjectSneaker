import nodeAPI from '@/configs/axios';

/**
 * Get not approved sneakers
 *
 * @returns {Promise} List of sneakers
 */
export function getNotApprovedSneakers() {
  return nodeAPI.get('/admin/sneakers').then((res) => res.data);
}

/**
 * Send a request for acceptance / cancellation of the application
 *
 * @param {string} id - identifier of sneakers
 * @param {boolean} resolve - status of resolve
 * @returns {Promise} Status of resolving
 */
export function approveOrRejectSneakers(id, resolve) {
  return nodeAPI.post('/admin/sneakers/resolve', { id, resolve }).then((res) => res.data);
}

export default {
  getNotApprovedSneakers,
  approveOrRejectSneakers,
};
