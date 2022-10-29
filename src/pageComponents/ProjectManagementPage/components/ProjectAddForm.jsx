import { useForm } from 'react-hook-form';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import styled from '@emotion/styled';

import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AddFormArea, Buttons, FormTitle, FormWrapper } from '@/styles/components/AddFormArea';
import { useEffect } from 'react';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import MuiTextField from '@/components/customMui/MuiTextField';
import { baseProps } from '@/components/customMui/common';

const ProjectAddForm = ({ onClose, modifyInfo }) => {
  const { alert } = useAlertStore();

  const { register, handleSubmit, reset, getValues } = useForm({ mode: 'onChange' });

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
    <FormWrapper>
      <FormTitle>{modifyInfo ? 'Add a new Project' : 'Modify the project'}</FormTitle>

      <form onSubmit={handleSubmit(addDataSource)}>
        <AddFormArea>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12}>
              <TextField
                label="Project Name"
                placeholder=""
                required
                {...baseProps}
                {...register('name', {
                  required: '프로젝트 이름은 필수 입력입니다.'
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel required>DB Type</InputLabel>
                <Select
                  label="Target Connection"
                  size="small"
                  required
                  {...register('server_name1', {
                    required: 'Connection Name 필수 입력입니다.'
                  })}
                >
                  <MenuItem value={'oracle'}>Dev_Server1_ORCL</MenuItem>
                </Select>
              </FormControl>
              <Box>
                Oracle11G
                <br /> developer1
                <br /> jdbc:oracle:thin:@192.168.20.102:1522/ORCL
              </Box>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel required>DB Type</InputLabel>
                <Select
                  label="Source Connection"
                  size="small"
                  required
                  {...register('server_name2', {
                    required: 'Connection Name 필수 입력입니다.'
                  })}
                >
                  <MenuItem value={'oracle'}>Dev_Server2_ORCL</MenuItem>
                </Select>
              </FormControl>
              <Box>
                Oracle11G
                <br /> developer1
                <br /> jdbc:oracle:thin:@192.168.20.102:1522/ORCL
              </Box>
            </Grid>
          </Grid>
          <Buttons>
            <ButtonNormalFill className="blue" type="submit">
              Save
            </ButtonNormalFill>
            <ButtonNormal className="blue" onClick={onClose}>
              Cancel
            </ButtonNormal>
            <ButtonNormal className="red" onClick={clickDelete} style={{ width: '100px' }}>
              Delete
            </ButtonNormal>
          </Buttons>
        </AddFormArea>
      </form>
    </FormWrapper>
  );
};

const Box = styled.div`
  margin-top: 10px;
  background-color: ${colors.bluegray100};
  border: 1px solid ${colors.bluegray250};

  border-radius: 5px;
  padding: 10px 13px;
  min-height: 200px;
  font-size: 13px;
  line-height: 1.65;
`;

export default ProjectAddForm;
