import styled from '@emotion/styled';

import OutOfSyncRecords from './components/OutOfSyncRecords';
import SynchronizationStatus from './components/SynchronizationStatus';

import { SubPageWrapper } from '@/styles/common';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import Filter from './components/Filters';

const CheckResult = () => {
  return (
    <SubPageWrapper>
      <CustomBreadcrumbs current="Job History" />

      <Filter />
      <SynchronizationStatus />
      {/* <OutOfSyncRecords /> */}
    </SubPageWrapper>
  );
};

const Wrapper = styled.div``;
const Filters = styled.div``;

export default CheckResult;
