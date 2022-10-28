import { ButtonNormal } from '@/components/Buttons';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { ButtonWrapper, SubPageWrapper } from '@/styles/common';

import OperationManageMentTable from './OperationTable';

const Operation = () => {
  return (
    <SubPageWrapper>
      <CustomBreadcrumbs current="Operation Management" />
      <ButtonWrapper>
        <ButtonNormal className="blue">Start</ButtonNormal>
        <ButtonNormal className="red">Stop</ButtonNormal>
      </ButtonWrapper>
      <OperationManageMentTable />
    </SubPageWrapper>
  );
};

export default Operation;
