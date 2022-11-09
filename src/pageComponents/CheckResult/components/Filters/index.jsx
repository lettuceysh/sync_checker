import { Grid } from '@mui/material';
import MuiSelect from '@/components/customMui/MuiSelect';
import { AddFormArea, FormTitle, FormWrapper } from '@/styles/components/AddFormArea';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import { useAlertStore } from '@/store';
import { useFieldArray, useForm } from 'react-hook-form';
import { useSearchAllProject } from '@/api/querys/projectManagament';
import { useMemo } from 'react';
import {
  useSearchAllSessionResultByOptions,
  useSearchJobByProject
} from '@/api/querys/jobManagementQuery';
import { useState } from 'react';
import { useEffect } from 'react';
import { jobManagementSearchAllSessionResultByOptions } from '@/api/jobManagement';
import { useSearchStore } from '../../store/useSearchStore';
import ProjectJob from './ProjectJob';

const Filter = () => {
  const { search } = useSearchStore();

  const { register, handleSubmit, watch, reset, getValues, control } = useForm({
    mode: 'onChange',
    defaultValues: { projectName: 'ALL', jobName: 'ALL' }
  });

  const handleSearch = async () => {
    const values = getValues();
    console.log('values', values);
    // search({
    //   token: 'abcd',
    //   project_name: 'dev_project',
    //   job_id: 0,
    //   result: 0,
    //   start_time: '2022-01-01 10:00:00',
    //   end_time: '2023-01-01 12:10:00'
    // });
    // setRequestData(getValues());
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleSearch)}>
        <AddFormArea>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <ProjectJob control={control} watch={watch} reset={reset} />
            <Grid item xs={4}>
              <MuiSelect
                label="Result"
                name="db_type"
                control={control}
                options={[
                  { value: 'Result All', label: '0' },
                  { value: 'Sync', label: '1' },
                  { value: 'Out-of-Sync', label: '2' }
                ]}
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
  );
};

export default Filter;
