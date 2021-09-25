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
 * @param {string|null} stringForSearch - search string
 * @param {number} limit - limit items for search
 * @returns {Promise} List of sneakers
 */
export function getSneakers(stringForSearch = '', limit = 3) {
  return nodeAPI.get('/sneakers', {
    params: {
      model: stringForSearch,
      limit,
    },
  }).then((res) => res.data);
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
