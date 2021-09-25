/**
 * Set locale state
 *
 * @param {string} locale - name of locale
 * @param {Function} callback - callback after change state
 * @returns {void}
 */
const setLocaleState = (locale, callback = () => {}) => {
  localStorage.setItem('locale', locale);
  callback();
};

/**
 * Set initial locale state
 *
 * @param {string} locale - name of locale
 * @returns {void}
 */
const initLocaleState = (locale) => {
  if (!localStorage.getItem('locale')) {
    setLocaleState(locale);
  }
};

export default {
  setLocaleState,
  initLocaleState,
};
