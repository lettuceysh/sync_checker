import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/dsManagement`;

export const dsManagementSearchAllDSInfo = async () => {
  const { data } = await post(`${baseUrl}/searchAllDSInfo`);
  return data;
};

export const dsManagementAddDs = async () => {
  const { data } = await post(`${baseUrl}/addDs`);
  return data;
};

export const dsManagementDeleteDs = async () => {
  const { data } = await post(`${baseUrl}/deleteDs`);
  return data;
};
