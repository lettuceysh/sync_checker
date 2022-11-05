import { host } from '.';
import { post } from './client';

const baseUrl = `${host}/jobManagement`;

export const searchAllJobStatusWithProject = async () => {
  const { data } = await post(`${baseUrl}/searchAllJobStatusWithProject`);
  return data;
};

export const searchAllJobWithProject = async () => {
  const { data } = await post(`${baseUrl}/searchAllJobWithProject`);
  return data;
};

export const jobManagementStartJob = (request) => {
  return post(`${baseUrl}/startJob`, request);
};

export const jobManagementStopJob = (request) => {
  return post(`${baseUrl}/stopJob`, request);
};

export const jobManagementAddJob = (request) => {
  return post(`${baseUrl}/addJob`, request);
};

export const jobManagementModify = (request) => {
  return post(`${baseUrl}/deleteJob`, request);
};

export const jobManagementDeleteJob = (request) => {
  return post(`${baseUrl}/deleteJob`, request);
};
