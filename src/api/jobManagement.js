import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/jobManagement`;

export const searchAllJobStatusWithProject = async () => {
  const { data } = await post(`${baseUrl}/searchAllJobStatusWithProject`);
  return data;
};
