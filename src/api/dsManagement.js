import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/dsManagement`;

export const dsManagementSearchAllDSInfo = async () => {
  const { data } = await post(`${baseUrl}/searchAllDSInfo`);
  return data;
};

export const dsManagementAddDS = async (request) => {
  const { data } = await post(`${baseUrl}/addDS`, request);
  return data;
};

export const dsManagementModifyDS = async (request) => {
  const { data } = await post(`${baseUrl}/modifyDS`, request);
  return data;
};

export const dsManagementDeleteDS = async (request) => {
  const { data } = await post(`${baseUrl}/deleteDS`, request);
  return data;
};

export const dsManagementSearchAllDSInfoByDirection = async (request) => {
  const { data } = await post(`${baseUrl}/searchAllDSInfoByDirection`, request);
  return data;
};
