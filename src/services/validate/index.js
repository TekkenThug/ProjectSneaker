import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import i18n from '@/services/translate/i18n';

const PASSWORD_REGEX = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

export default () => {
  Object.keys(rules).forEach((rule) => {
    extend(rule, {
      ...rules[rule],
      message: i18n.te(`validations.${rule}`) ? i18n.t(`validations.${rule}`) : '',
    });
  });

  extend('password', {
    validate(value) {
      return PASSWORD_REGEX.test(value);
    },
    message: i18n.t('validations.password'),
  });

  extend('password-confirm', {
    params: ['target'],
    validate(value, { target }) {
      return value === target;
    },
    message: i18n.t('validations.passwordConfirm'),
  });
};
