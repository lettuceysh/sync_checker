import { host } from '.';
import { post } from './client';

const dataSourceUrl = `${host}/dsManagement`;

export const dsManagementSearchAllDSInfo = async () => {
  const { data } = await post(`${dataSourceUrl}/searchAllDSInfo`);
  return data;
};
