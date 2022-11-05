import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/projectManagement`;

export const projectManagementSearchAllProject = async () => {
  const { data } = await post(`${baseUrl}/searchAllProject`);
  return data;
};

export const projectManagementAdd = async (request) => {
  const { data } = await post(`${baseUrl}/addProject`, request);
  return data;
};

export const projectManagementModify = async (request) => {
  const { data } = await post(`${baseUrl}/modifyProject`, request);
  return data;
};

export const projectManagementDelete = async (request) => {
  const { data } = await post(`${baseUrl}/deleteProject`, request);
  return data;
};
