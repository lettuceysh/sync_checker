import { useForm } from 'react-hook-form';
import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import styled from '@emotion/styled';

import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import {
  AddFormArea,
  Buttons,
  FormTitle,
  FormWrapper,
  ItemWithLabel
} from '@/styles/components/AddFormArea';
import { useEffect } from 'react';
import { useAlertStore } from '@/store';
import { colors } from '@/styles/colors';
import { baseProps } from '@/components/customMui/common';
import { CheckBox } from '@mui/icons-material';

const UserAddForm = ({ onClose, modifyInfo, open }) => {
  const { alert } = useAlertStore();

  const { register, handleSubmit, reset, getValues } = useForm({
    defaultValues: modifyInfo,
    mode: 'onChange'
  });

  useEffect(() => {
    if (modifyInfo) reset(modifyInfo, { keepValues: false });
    return () => {
      reset({});
    };
  }, [modifyInfo]);

  const addDataSource = (value) => {
    const values = getValues();
    alert({ content: '저장 하시겠습니까?', cancelText: 'Cancel' });
  };

  return (
    <Dialog open={open}>
      <FormWrapper>
        <FormTitle>{modifyInfo ? 'MDMS Modify' : 'User ADD'}</FormTitle>

        <form onSubmit={handleSubmit(addDataSource)}>
          <AddFormArea>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={6}>
                <TextField
                  label="User ID"
                  placeholder="아이디를 입력해주세요."
                  required
                  {...baseProps}
                  {...register('name', {
                    required: 'User ID 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="User Name"
                  placeholder="사용자의 이름을 입력해주세요."
                  required
                  {...baseProps}
                  {...register('password2', {
                    required: 'User Name 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="패스워드를 입력해주세요."
                  required
                  {...baseProps}
                  {...register('password', {
                    required: 'password 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <TextField
                  label="New Password"
                  type="password"
                  placeholder="동일한 패스워드를 입력해주세요."
                  required
                  {...baseProps}
                  {...register('new_password', {
                    required: 'Confirm Password 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  placeholder="동일한 패스워드를 입력해주세요."
                  required
                  {...baseProps}
                  {...register('confirm_new_password', {
                    required: 'Confirm Password 필수 입력입니다.'
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Telephone"
                  placeholder="전화번호를 입력해주세요."
                  {...baseProps}
                  {...register('phone', {})}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="E-mail"
                  placeholder="이메일주소를 입력해주세요."
                  {...baseProps}
                  {...register('email', {})}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Description"
                  placeholder="내용을 입력해주세요."
                  {...baseProps}
                  {...register('description', {})}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <InputLabel required>User Role</InputLabel>
                  <Select
                    label="User Role"
                    required
                    size="small"
                    {...register('role', {
                      required: 'User Role 필수 입력입니다.'
                    })}
                  >
                    <MenuItem value="1">Admin</MenuItem>
                    <MenuItem value="0">Normal</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <ItemWithLabel>
                  <label>Account lock</label>
                  <Checkbox name="locked" {...register('locked')} />
                </ItemWithLabel>
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
            <Middle>
              <div>
                ※ “<strong>*</strong>”은 필수 입력 항목 입니다.
              </div>
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
  padding: 20px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    font-weight: normal;
    color: ${colors.red100};
  }
`;

export default UserAddForm;
