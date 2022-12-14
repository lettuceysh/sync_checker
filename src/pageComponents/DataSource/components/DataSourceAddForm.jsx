import { useForm } from 'react-hook-form';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import styled from '@emotion/styled';

import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { AddFormArea, Buttons, FormTitle, FormWrapper } from '@/styles/components/AddFormArea';
import { useEffect, useMemo } from 'react';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { baseProps } from '@/components/customMui/common';
import { initAllValueInObject } from '@/libs/utils/array';
import MuiSelect from '@/components/customMui/MuiSelect';
import { dsManagementAddDS, dsManagementModifyDS } from '@/api/dsManagement';
import usePostProcess, { TYPE_TEXT } from '@/hooks/usePostProcess';

const DataSourceAddForm = ({ onClose, modifyInfo, defaultValues, open }) => {
  const { alert } = useAlertStore();
  const { goProcess } = usePostProcess();

  const { register, handleSubmit, reset, getValues, control } = useForm({
    mode: 'onChange',
    defaultValues
  });

  useEffect(() => {
    if (modifyInfo) reset(modifyInfo);
    return () => {
      reset({});
    };
  }, [modifyInfo]);

  const addDataSource = () => {
    const values = getValues();
    goProcess({
      api: modifyInfo ? dsManagementModifyDS : dsManagementAddDS,
      requestData: values,
      title: modifyInfo ? TYPE_TEXT.modify : TYPE_TEXT.save,
      onClose
    });
  };

  const testConnection = () => {
    const values = getValues();
    console.log('getValues', values);
    alert({
      content: (
        <>
          Connected <br />
          server: Oracle
          <br />
          Driver: Oracle JDBC driver
        </>
      )
    });
  };

  return (
    <Dialog open={true}>
      <FormWrapper>
        <FormTitle>{modifyInfo ? 'MDMS Modify' : 'Data Source Add'}</FormTitle>

        <form onSubmit={handleSubmit(addDataSource)}>
          <AddFormArea>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={6}>
                <TextField
                  label="Connection Name"
                  placeholder=""
                  required
                  {...baseProps}
                  {...register('name', {
                    required: 'Connection Name ?????? ???????????????.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <MuiSelect
                  label="DB Type"
                  name="db_type"
                  control={control}
                  options={[{ value: 'oracle', label: 'oracle' }]}
                  required
                  rules={{
                    required: 'Connection Name ?????? ???????????????.'
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <MuiSelect
                  label="source target"
                  name="source_target"
                  control={control}
                  options={[
                    { value: 'Source', label: 'Source' },
                    { value: 'Target', label: 'Target' }
                  ]}
                  required
                  rules={{
                    required: 'source_target ?????? ???????????????.'
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Account"
                  placeholder="Account??? ??????????????????"
                  required
                  {...baseProps}
                  {...register('account', {
                    required: 'Connection Name ?????? ???????????????.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="??????????????? ??????????????????"
                  required
                  {...baseProps}
                  {...register('password', {
                    required: 'password ?????? ???????????????.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Confirm Password"
                  placeholder="????????? ??????????????? ??????????????????"
                  type="password"
                  required
                  {...baseProps}
                  {...register('password2', {
                    required: 'password2 ?????? ???????????????.'
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="JDBC URL"
                  placeholder="url??? ????????? ?????????"
                  required
                  {...baseProps}
                  {...register('jdbc_url', {
                    required: 'Connection Name ?????? ???????????????.'
                  })}
                />
              </Grid>
            </Grid>
            <Middle>
              <div>
                ??? ???<strong>*</strong>?????? ?????? ?????? ?????? ?????????.
              </div>
              <ButtonNormal
                htmlType="button"
                className="blue2"
                onClick={testConnection}
                style={{ width: '150px' }}
              >
                Test Connection
              </ButtonNormal>
            </Middle>
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
  );
};

const Middle = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    font-weight: normal;
    color: ${colors.red100};
  }
`;

export default DataSourceAddForm;
