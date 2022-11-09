import { useQuery } from 'react-query';
import { projectManagementSearchAllProject } from '../project';

export const ProjectManagementKey = {
  projectManagementSearchAllProject: (request) => ['projectManagementSearchAllProject', request]
};

export const useSearchAllProject = (request, options) => {
  return useQuery(
    ProjectManagementKey.projectManagementSearchAllProject(request),
    () => projectManagementSearchAllProject(request),
    {
      ...options,
      select: (data) => {
        return data.data?.projects;
      }
    }
  );
};
