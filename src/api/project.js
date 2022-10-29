import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/projectManagement`;

export const projectManagementSearchAllProject = async () => {
  const { data } = await post(`${baseUrl}/searchAllProject`);
  return data;
};

export const projectManagementAdd = async () => {
  const { data } = await post(`${baseUrl}/addProject`);
  return data;
};

export const projectManagementModify = async () => {
  const { data } = await post(`${baseUrl}/modifyProject`);
  return data;
};

export const projectManagementDelete = async () => {
  const { data } = await post(`${baseUrl}/deleteProject`);
  return data;
};
