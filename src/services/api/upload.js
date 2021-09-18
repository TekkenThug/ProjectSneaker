import nodeAPI from '@/configs/axios';

/**
 * Upload sneaker image
 *
 * @param {File} image - file of image
 * @returns {Promise} Status of uploading
 */
export const uploadImage = (image) => {
  const formData = new FormData();
  formData.append('sneakerImage', image);

  return nodeAPI.post('/upload-image', formData);
};
