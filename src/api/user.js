import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/userManagement`;

export const userSearchAllUsersInfo = async () => {
  const { data } = await post(`${baseUrl}/searchAllUsersInfo`);
  return data;
};

export const userAddUser = async (request) => {
  const { data } = await post(`${baseUrl}/addUser`, request);
  return data;
};

export const userModifyUser = async (request) => {
  const { data } = await post(`${baseUrl}/modifyUser`, request);
  return data;
};

export const userDeleteUser = async (request) => {
  const { data } = await post(`${baseUrl}/deleteUser`, request);
  return data;
};
