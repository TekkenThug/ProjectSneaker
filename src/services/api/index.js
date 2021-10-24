import axios from '@/configs/axios';
import {
  getSneakers,
  postSneakers,
} from './sneakers';

import admin from './admin';

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
 * Send request for register new user
 *
 * @param {NewUserData} payload - new user data
 * @returns {Promise} Promise for frontend
 */
const registerUser = (payload) => {
  return axios.post('/auth/register', payload)
    .then((res) => res.data);
};

export default {
  admin,
  getSneakers,
  postSneakers,
  registerUser,
};
