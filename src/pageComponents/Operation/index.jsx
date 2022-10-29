import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';
import styled from '@emotion/styled';

import OperationManageMentTable from './OperationTable';

const Operation = () => {
  return (
    <SubPageWrapper>
      <CustomBreadcrumbs current="Operation Management" />
      <Top>
        <ButtonWrapper>
          <ButtonNormal className="blue">Start</ButtonNormal>
          <ButtonNormal className="red">Stop</ButtonNormal>
        </ButtonWrapper>
      </Top>

      <OperationManageMentTable />
    </SubPageWrapper>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Operation;
