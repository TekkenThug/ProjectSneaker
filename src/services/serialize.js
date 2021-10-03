export default (objToSerialize) => {
  const obj = {};
  Object.keys(objToSerialize).forEach((field) => {
    obj[field] = objToSerialize[field].value;
  });

  return obj;
};

export const serializeToFormData = (objToSerialize) => {
  const form = new FormData();

  Object.keys(objToSerialize).forEach((key) => {
    form.append(key, objToSerialize[key]);
  });

  return form;
};
