/**
 * Set initial locale state
 *
 * @param {string} locale - name of locale
 * @returns {void}
 */
export const initLocaleState = (locale) => {
  if (!localStorage.getItem('locale')) {
    localStorage.setItem('locale', locale);
  }
};
