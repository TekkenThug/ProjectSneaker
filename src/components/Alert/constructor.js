import Vue from 'vue';
import Alert from './index';

/** Alert instance */
const AlertClass = Vue.extend(Alert);

/**
 * Create alert instance and mount it
 * @param {string} msgType - message type
 * @param {string} title - alert title
 * @param {string} text - alert text
 * @returns {void}
 */
export default (msgType, title, text = '') => {
  const alertInstance = new AlertClass({
    propsData: {
      title,
      msgType,
    },
  });

  alertInstance.$slots.default = text;

  alertInstance.$mount();

  document.body.querySelector('.app-view__alert-list').appendChild(alertInstance.$el);
};
