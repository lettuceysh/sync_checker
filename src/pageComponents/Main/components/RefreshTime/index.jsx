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
  margin-left: auto;
  margin-right: 10px;
  &&& {
    * {
      color: ${colors.gray900};
      font-weight: 600;
    }
  }
`;

export default RefreshTime;
