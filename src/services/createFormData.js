export default (objectData) => {
  const form = new FormData();

  Object.keys(objectData).forEach((key) => {
    form.append(key, objectData[key]);
  });

  return form;
};
