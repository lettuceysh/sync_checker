import { colors } from '@/styles/colors';
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
  padding: 5px;
  text-align: right;
  &&& {
    * {
      color: ${colors.white100};
    }
  }
`;

export default RefreshTime;
