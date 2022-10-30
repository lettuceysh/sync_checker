import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/userManagement`;

export const userSearchAllUsersInfo = async () => {
  const { data } = await post(`${baseUrl}/searchAllUsersInfo`);
  return data;
};
