import { post } from './client';

const host = 'http://49.236.178.37:8080';

export const testCall = () => {
  return post(`${host}/jobManagement/searchAllJobWithProject`, {
    token: 'abcd',
    project_name: 'dev_project'
  });
};
