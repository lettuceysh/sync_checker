import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import LoopIcon from '@mui/icons-material/Loop';

const Login = () => {
  return (
    <Wrapper>
      <Container>
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
            placeholder="아이디를 입력해 주세요."
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="비밀번호를 입력해 주세요."
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            variant="outlined"
            fullWidth
            required
          />
        </InputWrapper>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="아이디 저장"
          style={{ marginTop: '10px' }}
        />
        <CustomizedButton variant="large" type="submit" fullWidth>
          Login
        </CustomizedButton>
      </Container>
    </Wrapper>
  );
};

const TitleCss = css`
  letter-spacing: 1px;
`;

const CustomizedButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.palette.colors.blue400};
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
  background-color: rgb(249, 250, 252);
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
