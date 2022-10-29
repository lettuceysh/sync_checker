import { host } from '.';
import { post } from './client';

const dataSourceUrl = `${host}/dsManagement`;

export const dsManagementSearchAllDSInfo = async () => {
  const { data } = await post(`${dataSourceUrl}/searchAllDSInfo`);
  return data;
};

export const dsManagementAddDs = async () => {
  const { data } = await post(`${dataSourceUrl}/addDs`);
  return data;
};

export const dsManagementDeleteDs = async () => {
  const { data } = await post(`${dataSourceUrl}/deleteDs`);
  return data;
};
