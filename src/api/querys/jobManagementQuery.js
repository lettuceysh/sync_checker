import { useQuery } from 'react-query';
import { dsManagementSearchAllDSInfoByDirection } from '../dsManagement';
import { searchAllJobStatusWithProject, searchAllJobWithProject } from '../jobManagement';

export const JobManagementKey = {
  searchAllJobStatusWithProject: ['searchAllJobStatusWithProject'],
  searchAllJobWithProject: ['searchAllJobWithProject']
};

export const useSearchAllJobStatusWithProject = () => {
  return useQuery(
    JobManagementKey.searchAllJobStatusWithProject,
    () => searchAllJobStatusWithProject(),
    {
      select: (data) => {
        return data.data?.jobStatusaWithProject;
      }
    }
  );
};

export const useSearchAllJobWithProject = () => {
  return useQuery(JobManagementKey.searchAllJobWithProject, () => searchAllJobWithProject(), {
    select: (data) => {
      return data.data?.jobWithProject;
    }
  });
};
