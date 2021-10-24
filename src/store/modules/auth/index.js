/* eslint-disable no-shadow */
/* eslint-disable jsdoc/check-param-names */
import axios from '@/configs/axios';

import { UPDATE_TOKENS } from './mutation-types';

/**
 * Log in user data
 *
 * @typedef {object} LogInData
 * @property {string} email - user email
 * @property {string} password - password
 */

const state = {
  token: '',
  refreshToken: '',
};

const mutations = {
  [UPDATE_TOKENS](state, { token, refreshToken }) {
    state.token = token;
    state.refreshToken = refreshToken;
  },
};

const actions = {
  /**
   * Send request for log in user
   *
   * @param {Function} commit - calling mutation
   * @param {LogInData} dataForLogIn - user log in data
   * @returns {Promise} Promise for frontend
   */
  logIn({ commit }, dataForLogIn) {
    return axios.post('/auth/login', dataForLogIn)
      .then((res) => res.data)
      .then((tokens) => {
        commit(UPDATE_TOKENS, tokens);
      });
  },

  /**
   * Send request for refresh tokens
   *
   * @param {Function} commit - calling mutation
   * @param {object} state - current state
   * @returns {Promise} Promise for frontend
   */
  refresh({ commit, state }) {
    return axios.post('/auth/refresh', state.refreshToken)
      .then((res) => res.data)
      .then((tokens) => {
        commit(UPDATE_TOKENS, tokens);
      });
  },

  /**
   * Send request for log in user
   *
   * @param {Function} commit - calling mutation
   * @param {string} userID - user ID who want logout
   * @returns {Promise} Promise for frontend
   */
  logOut({ commit }, userID) {
    return axios.post('/auth/logout', userID)
      .then((res) => res.data)
      .then(() => {
        commit(UPDATE_TOKENS, { token: '', refreshToken: '' });
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
