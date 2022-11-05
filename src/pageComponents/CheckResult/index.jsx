import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import OutOfSyncRecords from './components/OutOfSyncRecords';
import SynchronizationStatus from './components/SynchronizationStatus';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import { useAlertStore } from '@/store';
import { AddFormArea, FormTitle, FormWrapper } from '@/styles/components/AddFormArea';
import { SubPageWrapper } from '@/styles/common';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { Grid } from '@mui/material';
import MuiSelect from '@/components/customMui/MuiSelect';

const CheckResult = () => {
  const { alert } = useAlertStore();

  const { register, handleSubmit, reset, getValues, control } = useForm({
    mode: 'onChange'
  });

  const search = () => {};

  return (
    <SubPageWrapper>
      <CustomBreadcrumbs current="Job History" />
      <FormWrapper>
        <form onSubmit={handleSubmit(search)}>
          <AddFormArea>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={4}>
                <MuiSelect
                  label="Project Name"
                  name="db_type"
                  control={control}
                  options={[{ value: 'oracle', label: 'oracle' }]}
                  required
                  rules={{
                    required: 'Connection Name 필수 입력입니다.'
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <MuiSelect
                  label="Job(Tables)"
                  name="db_type"
                  control={control}
                  options={[{ value: 'oracle', label: 'oracle' }]}
                  required
                  rules={{
                    required: 'Connection Name 필수 입력입니다.'
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <MuiSelect
                  label="Result"
                  name="db_type"
                  control={control}
                  options={[{ value: 'oracle', label: 'oracle' }]}
                  required
                  rules={{
                    required: 'Connection Name 필수 입력입니다.'
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <MuiSelect
                  label="Start Time"
                  name="db_type"
                  control={control}
                  options={[{ value: 'oracle', label: 'oracle' }]}
                  required
                  rules={{
                    required: 'Connection Name 필수 입력입니다.'
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <MuiSelect
                  label="End Time"
                  name="db_type"
                  control={control}
                  options={[{ value: 'oracle', label: 'oracle' }]}
                  required
                  rules={{
                    required: 'Connection Name 필수 입력입니다.'
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <ButtonNormalFill className="blue" type="submit">
                  Search
                </ButtonNormalFill>
              </Grid>
            </Grid>
          </AddFormArea>
        </form>
      </FormWrapper>

      <SynchronizationStatus />
      <OutOfSyncRecords />
    </SubPageWrapper>
  );
};

const Wrapper = styled.div``;
const Filters = styled.div``;

export default CheckResult;
