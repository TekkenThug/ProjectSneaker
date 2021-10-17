import nodeAPI from '@/configs/axios';

/**
 * Get not approved sneakers
 *
 * @returns {Promise} List of sneakers
 */
export function getNotApprovedSneakers() {
  return nodeAPI.get('/admin/sneakers').then((res) => res.data);
}

export default {
  getNotApprovedSneakers,
};
