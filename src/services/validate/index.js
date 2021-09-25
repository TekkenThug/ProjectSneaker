/**
 * This module is responsible for the validation
 * of various types of files.
 */

/**
 * Checks the file type for an image
 *
 * @param {string} fileType - type of file
 * @returns {boolean} validateState - state of validate
 */
// eslint-disable-next-line import/prefer-default-export
export const validateImage = (fileType) => {
  return Boolean(fileType.match(/image/gi));
};
