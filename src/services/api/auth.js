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
 * Log in user data
 *
 * @typedef {object} LogInData
 * @property {string} email - user email
 * @property {string} password - password
 */

/**
 * Send request for register new user
 *
 * @param {NewUserData} dataForRegister - new user data
 * @returns {Promise} Status of registration
 */
function register(dataForRegister) {
  return nodeAPI.post('/auth/register', dataForRegister).then((res) => res.data);
}

/**
 * Send request for log in user
 *
 * @param {LogInData} dataForLogIn - user log in data
 * @returns {Promise} Status of login
 */
function logIn(dataForLogIn) {
  return nodeAPI.post('/auth/login', dataForLogIn).then((res) => res.data);
}

/**
 * Check if user is authenticate
 *
 * @param {string} token - user JWT token
 * @returns {Promise} Status of checking user
 */
function checkAuth(token) {
  return nodeAPI.post('/auth/check-in', { token }).then((res) => res.data);
}

export default {
  register,
  logIn,
  checkAuth,
};
