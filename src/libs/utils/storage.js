export const setStorage = (key, value) => {
  if (!localStorage) {
    return;
  }
  localStorage.setItem(key, value);
};

export const getStorage = (key) => {
  if (!localStorage) {
    return;
  }
  return localStorage.getItem(key);
};
