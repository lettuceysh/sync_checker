import { useForm } from 'react-hook-form';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import styled from '@emotion/styled';

import { Button, Checkbox, Dialog, Grid, TextField } from '@mui/material';
import {
  AddFormArea,
  Buttons,
  FormTitle,
  FormWrapper,
  ItemWithLabel
} from '@/styles/components/AddFormArea';
import { useEffect, useState } from 'react';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { baseProps } from '@/components/customMui/common';
import MuiSelect from '@/components/customMui/MuiSelect';
import TableNavigation from './TableNavigation';
import usePostProcess, { TYPE_TEXT } from '@/hooks/usePostProcess';
import { jobManagementAddJob, jobManagementModify } from '@/api/jobManagement';
import { Times } from './helper';

const ConfigurationAddForm = ({ onClose, modifyInfo }) => {
  const { goProcess } = usePostProcess();
  const { alert } = useAlertStore();
  const [isTableNavigation, setIsTableNavigation] = useState(false);

  const { register, handleSubmit, reset, getValues, control } = useForm({
    defaultValues: modifyInfo,
    mode: 'onChange'
  });

  useEffect(() => {
    if (modifyInfo) reset(modifyInfo, { keepValues: false });
    return () => {
      reset({});
    };
  }, [modifyInfo]);

  const addDataSource = () => {
    const values = getValues();
    goProcess({
      api: modifyInfo ? jobManagementModify : jobManagementAddJob,
      requestData: values,
      title: modifyInfo ? TYPE_TEXT.modify : TYPE_TEXT.save,
      onClose
    });
  };

  const clickSelect = () => {
    setIsTableNavigation(true);
  };

  return (
    <>
      <Dialog open={true}>
        <FormWrapper>
          <FormTitle>{modifyInfo ? 'Configuration Modify' : 'Configuration Add'}</FormTitle>

          <form onSubmit={handleSubmit(addDataSource)}>
            <AddFormArea>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                <Grid item xs={6}>
                  <MuiSelect
                    label="Project Name"
                    name="role"
                    control={control}
                    options={[{ value: 'dev', label: 'Dev' }]}
                    required
                    rules={{
                      required: 'Project Name'
                    }}
                  />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    label="Source Connection"
                    name=""
                    placeholder=""
                    {...baseProps}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SetArea>
                    <TextField
                      disabled
                      label="Source Table"
                      name=""
                      placeholder=""
                      {...baseProps}
                    />
                    <ButtonNormal onClick={clickSelect}>select</ButtonNormal>
                  </SetArea>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    label="Target Connection"
                    name=""
                    placeholder=""
                    {...baseProps}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SetArea>
                    <TextField
                      disabled
                      label="Target Table"
                      name=""
                      placeholder=""
                      {...baseProps}
                    />
                    <ButtonNormal onClick={clickSelect}>select</ButtonNormal>
                  </SetArea>
                </Grid>
                <Grid item xs={6}>
                  <MuiSelect
                    label="Period (Seconds)"
                    name="role"
                    control={control}
                    options={Times}
                    required
                    rules={{
                      required: 'Period (Seconds)'
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <MuiSelect
                    label="Delay Time (Seconds)"
                    name="role"
                    control={control}
                    options={Times}
                    required
                    rules={{
                      required: 'Period (Seconds)'
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="비고" placeholder="" {...baseProps} {...register('b')} />
                </Grid>
              </Grid>

              <Buttons>
                <ButtonNormalFill className="blue" type="submit">
                  Save
                </ButtonNormalFill>
                <ButtonNormal className="blue" onClick={onClose}>
                  Cancel
                </ButtonNormal>
              </Buttons>
            </AddFormArea>
          </form>
        </FormWrapper>
      </Dialog>
      {isTableNavigation && <TableNavigation onClose={() => setIsTableNavigation(false)} />}
    </>
  );
};

const SetArea = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 2px;
    border-radius: 2px;
    height: 37px;
  }
`;

const Middle = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    font-weight: normal;
    color: ${colors.red100};
  }
`;

export default ConfigurationAddForm;
