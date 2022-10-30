export const makeDefaultValues = (arr) => {
  const obj = {};
  arr.forEach((element) => {
    obj[element.field] = '';
  });

  return obj;
};
