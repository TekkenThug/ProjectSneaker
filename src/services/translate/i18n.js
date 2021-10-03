import Vue from 'vue';
import VueI18n from 'vue-i18n';

import VMEN from 'vee-validate/dist/locale/en';
import VMRU from 'vee-validate/dist/locale/ru';

Vue.use(VueI18n);

const DICTIONARY = {};

/**
 * Set translations from libraries and packages
 *
 * @param {string}key - key for set translations
 * @param {JSON} libForEn - translations on english
 * @param {JSON} libForRu - translations on russian
 */
const processTranslationsFromLib = (key, libForEn, libForRu) => {
  DICTIONARY.en[key] = libForEn;
  DICTIONARY.ru[key] = libForRu;
};

/**
 * Loading local messages from project
 *
 * @returns {object} dictionary with translations
 */
const loadLocaleMessages = () => {
  const locales = require.context('../../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);

  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      DICTIONARY[locale] = locales(key);
    }
  });

  processTranslationsFromLib('validations', VMEN, VMRU);

  return DICTIONARY;
};

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});
