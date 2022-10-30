import { searchAllJobStatusWithProject } from '@/api/jobManagement';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import JobBoard from './components/JobBoard';
import OperationStatus from './components/OperationStatus';
import Records from './components/Records';
import Summarization from './components/Summarization';

const Main = () => {
  const [jobStatus, setJobStatus] = useState();

  useEffect(() => {
    searchAllJobStatusWithProject().then((response) => {
      console.log('response', response);
      setJobStatus(response.data.jobStatusaWithProject);
    });
  }, []);

  return (
    <Wrapper>
      <SubWrapper>
        <Top>
          <OperationStatus jobStatus={jobStatus} />
          <Summarization jobStatus={jobStatus} />
        </Top>
        <Middle>
          <JobBoard />
        </Middle>
        <Bottom>
          <Records />
        </Bottom>
      </SubWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.palette.background.dashboard1};
`;
const SubWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.dashboard2};
  border-radius: 4px;
  padding: 10px;
`;

const Top = styled.div`
  display: flex;
  > * + * {
    margin-left: 10px;
  }
  width: 100%;
  align-items: center;
`;
const Middle = styled.div`
  margin-top: 15px;
`;
const Bottom = styled.div`
  margin-top: 15px;
`;

export default Main;
