import nodeAPI from '@/configs/axios';

/**
 * Pair of Sneakers
 *
 * @typedef {object} Sneakers
 * @property {string} name - pair name
 * @property {string} colorway - current colorway
 * @property {string} vendorCode - vendor code of product
 * @property {string} releaseDate - worldwide release date
 */

/**
 * Get list of sneakers
 *
 * @returns {Promise} List of sneakers
 */
export function getSneakers() {
  return nodeAPI.get('/sneakers')
    .then((res) => res.data);
}

/**
 * Post sneakers
 *
 * @param {Sneakers} data - data on a pair of sneakers
 * @returns {Promise} Status of posting
 */
export function postSneakers(data) {
  return nodeAPI.post('/sneakers', data);
}
