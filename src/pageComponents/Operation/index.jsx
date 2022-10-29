import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';
import styled from '@emotion/styled';

import OperationManageMentTable from './OperationTable';

const Operation = () => {
  return (
    <SubPageWrapper>
      <Top>
        <CustomBreadcrumbs current="Operation Management" />
        <div>
          <ButtonWrapper>
            <ButtonNormal className="blue" style={{ width: '100px' }}>
              Start
            </ButtonNormal>
            <ButtonNormal className="red" style={{ width: '100px' }}>
              Stop
            </ButtonNormal>
          </ButtonWrapper>
        </div>
      </Top>

      <OperationManageMentTable />
    </SubPageWrapper>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Operation;
