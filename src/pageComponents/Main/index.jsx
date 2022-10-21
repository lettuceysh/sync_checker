import styled from '@emotion/styled';
import JobBoard from './JobBoard';
import OperationStatus from './OperationStatus';
import Records from './Records';
import RefreshTime from './RefreshTime';
import Summarization from './Summarization';
import SynchronizationStatus from './SynchronizationStatus';

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
