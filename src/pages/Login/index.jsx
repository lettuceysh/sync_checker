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
const Login = () => {
  const paperStyle = { padding: 20, height: '70vh', width: '500px', margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  return (
    <Wrapper>
      <Container>
        <Top>
          <Typography variant="h1">SyncChecker</Typography>
          <Typography>For OracleGoldenGate</Typography>
        </Top>
        <WrapTest>
          <TextField
            label="Username"
            placeholder="아이디를 입력해 주세요."
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            variant="outlined"
            fullWidth
            required
          />
        </WrapTest>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="아이디 저장"
        />
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
          Login
        </Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
  height: 400px;
`;

const Top = styled.div`
  text-align: center;
  > p {
    margin-top: 10px;
  }
`;

const WrapTest = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Login;
