import styled from '@emotion/styled';

import { css, Typography } from '@mui/material';
import BasicMenu from './Menu';
import Setting from './Setting';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { colors } from '@/styles/colors';

const Gnb = () => {
  return (
    <Wrapper>
      <BasicMenu />
      <Title>
        <H1>
          <BlurOnIcon style={{ color: colors.logo, fontSize: '30px', marginRight: '10px' }} />
          <strong>SyncChecker</strong> For Oracle GoldenGate
        </H1>
      </Title>
      <Setting />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 10px 25px;
`;

const Title = styled.div``;

const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 20px;

  > strong {
    color: ${({ theme }) => theme.palette.logo};

    font-size: 20px;
    margin-right: 7px;
  }
`;

export default Gnb;
