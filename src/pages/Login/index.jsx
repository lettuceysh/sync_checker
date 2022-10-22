import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const login = (value) => {
    console.log('value', value);
    setOpen(true);
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit(login)}>
          <Top>
            <LockResetIcon color="primary" fontSize="large" />
            <Typography variant="h1" sx={TitleCss}>
              SyncChecker
            </Typography>
            <Typography variant="subtitle1">For OracleGoldenGate</Typography>
          </Top>
          <InputWrapper>
            <TextField
              label="아이디를 입력해 주세요."
              placeholder="ID"
              variant="outlined"
              fullWidth
              required
              {...register('email', {
                required: '이메일은 필수 입력입니다.'
              })}
            />
            <TextField
              label="비밀번호를 입력해 주세요."
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              {...register('password', {
                required: '비밀번호는 필수 입력입니다.'
              })}
            />
          </InputWrapper>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" {...register('save')} />}
            label="아이디 저장"
            style={{ marginTop: '10px' }}
          />
          <CustomizedButton variant="large" type="submit" fullWidth>
            Login
          </CustomizedButton>
        </form>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          로그인을 실패하였습니다
          <br />
          아이디 또는 비밀번호를 다시 확인하세요! <br />※ 아이디/비밀번호 분실시 관리자에게
          연락하세요.
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

const TitleCss = css`
  letter-spacing: 1px;
`;

const CustomizedButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.palette.blue400};
    margin-top: 20px;
    height: 50px;
    font-size: 14px;
  `
);

const Wrapper = styled.article`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  background-image: url('/sync_checker/images/bg.png');
  background-position: bottom;
  background-size: 100%;
`;

const Container = styled.div`
  width: 552px;
  background-color: rgb(255, 255, 255);
  color: rgb(18, 24, 40);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 8px;
  box-shadow: rgb(100 116 139 / 12%) 0px 10px 15px;
  background-image: none;
  overflow: hidden;
  padding: 32px;
`;

const Top = styled.div`
  text-align: center;
  > p {
    margin-top: 10px;
  }
`;

const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Login;
