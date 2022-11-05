import { jobManagementStartJob, jobManagementStopJob } from '@/api/jobManagement';
import { useSearchAllJobStatusWithProject } from '@/api/querys/jobManagementQuery';
import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import usePostProcess, { TYPE_TEXT } from '@/hooks/usePostProcess';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';
import styled from '@emotion/styled';

import OperationManageMentTable from './OperationTable';
import { useOperationStore } from './store/useOperationStore';

const Operation = () => {
  const { goProcess } = usePostProcess();
  const { data } = useSearchAllJobStatusWithProject();
  const { ids } = useOperationStore();

  const startJob = () => {
    goProcess({
      api: jobManagementStartJob,
      requestData: { jobIds: ids },
      title: TYPE_TEXT.start
    });
  };

  const stopJob = () => {
    goProcess({
      api: jobManagementStopJob,
      requestData: { jobIds: ids },
      title: TYPE_TEXT.stop
    });
  };

  return (
    <SubPageWrapper>
      <Top>
        <CustomBreadcrumbs current="Project List" />
        <div>
          <ButtonWrapper>
            <ButtonNormal
              className="blue"
              style={{ width: '100px' }}
              onClick={startJob}
              disabled={!ids.length}
            >
              Start
            </ButtonNormal>
            <ButtonNormal
              className="red"
              style={{ width: '100px' }}
              onClick={stopJob}
              disabled={!ids.length}
            >
              Stop
            </ButtonNormal>
          </ButtonWrapper>
        </div>
      </Top>

      <OperationManageMentTable jobs={data} />
    </SubPageWrapper>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Operation;
