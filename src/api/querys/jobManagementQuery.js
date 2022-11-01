import { useQuery } from 'react-query';
import { searchAllJobStatusWithProject } from '../jobManagement';

export const JobManagementKey = {
  searchAllJobStatusWithProject: ['searchAllJobStatusWithProject']
};

export const useSearchAllJobStatusWithProject = () => {
  return useQuery(JobManagementKey.searchAllJobStatusWithProject, () =>
    searchAllJobStatusWithProject()
  );
};
