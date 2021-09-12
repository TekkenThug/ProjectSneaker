import Vue from 'vue';
import Alert from './index';

const AlertClass = Vue.extend(Alert);

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
