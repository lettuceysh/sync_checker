import { useForm } from 'react-hook-form';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import styled from '@emotion/styled';

import { Dialog, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AddFormArea, Buttons, FormTitle, FormWrapper } from '@/styles/components/AddFormArea';
import { useEffect } from 'react';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { baseProps } from '@/components/customMui/common';
import { defaultValue } from '..';
import MuiSelect from '@/components/customMui/MuiSelect';

const ProjectAddForm = ({ onClose, modifyInfo, defaultValues, open }) => {
  const { alert } = useAlertStore();

  const { register, handleSubmit, reset, getValues, setFocus, control } = useForm({
    mode: 'onChange',
    defaultValues
  });

  useEffect(() => {
    reset(modifyInfo);

    return () => {
      reset({});
    };
  }, [modifyInfo]);

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const addDataSource = (value) => {
    const values = getValues();
    console.log('value', values);
    alert({ content: '저장 하시겠습니까?', cancelText: 'Cancel' });
  };

  const clickDelete = () => {
    alert({ content: '삭제하시겠습니까?', cancelText: 'Cancel', onOk: () => {} });
  };

  return (
    <Dialog open={open}>
      <FormWrapper>
        <FormTitle>{modifyInfo?.name ? 'Add a new Project' : 'Modify the project'}</FormTitle>

        <form onSubmit={handleSubmit(addDataSource)}>
          <AddFormArea>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={12}>
                <TextField
                  label="Project Name"
                  placeholder="프로젝트 이름을 입력해주세요."
                  required
                  {...baseProps}
                  {...register('name', {
                    required: '프로젝트 이름은 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <MuiSelect
                  label="Source Connection"
                  name="source_DS_INFO_name"
                  control={control}
                  options={[{ value: 'dev_src_oggtest', label: 'Dev_Server1_ORCL' }]}
                  required
                  rules={{
                    required: 'Source Connection 필수 입력입니다.'
                  }}
                />
                <Box>
                  Oracle11G
                  <br /> developer1
                  <br /> jdbc:oracle:thin:@192.168.20.102:1522/ORCL
                </Box>
              </Grid>
              <Grid item xs={6}>
                <MuiSelect
                  label="Target Connection"
                  name="target_DS_INFO_name"
                  control={control}
                  options={[{ value: 'dev_src_oggtest', label: 'Dev_Server2_ORCL' }]}
                  required
                  rules={{
                    required: 'Target Connection 필수 입력입니다.'
                  }}
                />
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
            </Buttons>
          </AddFormArea>
        </form>
      </FormWrapper>
    </Dialog>
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
