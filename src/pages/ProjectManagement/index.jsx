import DefaultLayout from '@/layouts/DefaultLayout';
import SubLayout from '@/layouts/SubLayout';
import Operation from '@/pageComponents/Operation';
import ProjectManagement from '@/pageComponents/ProjectManagementPage';

const ProjectManagementPage = () => {
  return (
    <SubLayout>
      <ProjectManagement />
    </SubLayout>
  );
};

export default ProjectManagementPage;
