import styled from '@emotion/styled';

import { Typography } from '@mui/material';
import BasicMenu from './Menu';
import Setting from './Setting';

const Gnb = () => {
  return (
    <Wrapper>
      <BasicMenu />
      <Title>
        <Typography variant="h1" component="h2">
          SyncChecker For Oracle GoldenGate
        </Typography>
      </Title>
      <Setting />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;

export default Gnb;
