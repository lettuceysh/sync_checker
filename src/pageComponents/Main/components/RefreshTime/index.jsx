import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const RefreshTime = () => {
  return (
    <Wrapper>
      <Typography variant="normal">2022-10-10 10:10:10</Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 10px;
  text-align: right;
`;

export default RefreshTime;
