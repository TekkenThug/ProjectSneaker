import nodeAPI from '@/configs/axios';

/**
 * New user data for register
 *
 * @typedef {object} NewUserData
 * @property {string} email - user email
 * @property {string} nickname - nick on site
 * @property {string} password - password
 * @property {string} repeatPassword - repeat password
 */

/**
 * Register user
 *
 * @param {NewUserData} dataForRegister - new user data
 * @returns {Promise} List of sneakers
 */
function register(dataForRegister) {
  return nodeAPI.post('/auth/register', dataForRegister).then((res) => res.data);
}

export default {
  register,
};
