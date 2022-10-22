import styled from '@emotion/styled';
import JobBoard from './components/JobBoard';
import OperationStatus from './components/OperationStatus';
import Records from './components/Records';
import RefreshTime from './components/RefreshTime';
import Summarization from './components/Summarization';

const Main = () => {
  return (
    <Wrapper>
      <RefreshTime />
      <SubWrapper>
        <Top>
          <OperationStatus />
          <Summarization />
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
  padding: 0 15px 15px 15px;
  background-color: ${({ theme }) => theme.palette.background.dashboard1};
`;
const SubWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.dashboard2};
  border-radius: 4px;
  padding: 15px;
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
  margin-top: 20px;
`;
const Bottom = styled.div`
  margin-top: 20px;
`;

export default Main;
