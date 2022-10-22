import styled from '@emotion/styled';
import JobBoard from './components/JobBoard';
import OperationStatus from './components/OperationStatus';
import Records from './components/Records';
import RefreshTime from './components/RefreshTime';
import Summarization from './components/Summarization';
import SynchronizationStatus from './components/SynchronizationStatus';

const Main = () => {
  return (
    <Wrapper>
      <RefreshTime />
      <Top>
        <OperationStatus />
        <SynchronizationStatus />
        <Summarization />
      </Top>
      <Middle>
        <JobBoard />
      </Middle>
      <Bottom>
        <Records />
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Top = styled.div`
  display: flex;
  > * + * {
    margin-left: 10px;
  }
  width: 100%;
  align-items: center;
`;
const Middle = styled.div`
  margin-top: 40px;
`;
const Bottom = styled.div`
  margin-top: 40px;
`;

export default Main;
