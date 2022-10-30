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

const DataSourceAddForm = ({ onClose, modifyInfo, defaultValues, open }) => {
  const { alert } = useAlertStore();

  const { register, handleSubmit, reset, getValues } = useForm({
    mode: 'onChange',
    defaultValues
  });

  useEffect(() => {
    if (modifyInfo) reset(modifyInfo);
    return () => {
      reset({});
    };
  }, [modifyInfo]);

  const addDataSource = (value) => {
    const values = getValues();
    alert({ content: '저장 하시겠습니까?', cancelText: 'Cancel' });
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

  const clickDelete = () => {
    alert({ content: '삭제하시겠습니까?', cancelText: 'Cancel', onOk: () => {} });
  };

  return (
    <Dialog open={open}>
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
                    required: 'Connection Name 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <InputLabel required>DB Type</InputLabel>
                  <Select
                    label="DB Type"
                    size="small"
                    required
                    {...register('db_type', {
                      required: 'Connection Name 필수 입력입니다.'
                    })}
                  >
                    <MenuItem value={'oracle'}>oracle</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <InputLabel required>Source/Target</InputLabel>
                  <Select
                    label="source target"
                    required
                    size="small"
                    {...register('source_target', {
                      required: 'Connection Name 필수 입력입니다.'
                    })}
                  >
                    <MenuItem value="Source">Source</MenuItem>
                    <MenuItem value="Target">Target</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Account"
                  placeholder="Account를 입력해주세요"
                  required
                  {...baseProps}
                  {...register('account', {
                    required: 'Connection Name 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="패스워드를 입력해주세요"
                  required
                  {...baseProps}
                  {...register('password', {
                    required: 'password 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Confirm Password"
                  placeholder="동일한 패스워드를 입력해주세요"
                  type="password"
                  required
                  {...baseProps}
                  {...register('password2', {
                    required: 'password2 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="JDBC URL"
                  placeholder="url을 입력해 주세요"
                  required
                  {...baseProps}
                  {...register('jdbc_url', {
                    required: 'Connection Name 필수 입력입니다.'
                  })}
                />
              </Grid>
            </Grid>
            <Middle>
              <div>
                ※ “<strong>*</strong>”은 필수 입력 항목 입니다.
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
