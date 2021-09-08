import nodeAPI from '@/configs/axios';

/**
 * Get list of sneakers
 *
 * @returns {Promise} List of sneakers
 */
export default function getSneakers() {
  return nodeAPI.get('/sneakers');
}
