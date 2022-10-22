import axios from 'axios';
// import https from 'https';

const instance = axios.create({
  timeout: 10000,
  withCredentials: true
  //   httpsAgent: new https.Agent({
  //     rejectUnauthorized: false
  //   })
});

instance.interceptors.request.use((request) => {
  return { ...request, token: 'abcd' };
});

export const get = (url, params = null, config = {}) => {
  return instance.get(url, { params, ...config });
};

export const post = (url, data, config = {}) => {
  return instance.post(url, data, config);
};

export const put = (url, data = {}, options = {}) => {
  return instance({
    method: 'PUT',
    data,
    url
  });
};

export const del = (url, options = {}) => {
  const customOptions = { cache: false, ...options };
  return instance(
    {
      method: 'DELETE',
      url
    },
    customOptions
  );
};
