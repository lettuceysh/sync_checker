import styled from '@emotion/styled';

import { css, Typography } from '@mui/material';
import BasicMenu from './Menu';
import Setting from './Setting';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { colors } from '@/styles/colors';
import RefreshTime from '@/pageComponents/Main/components/RefreshTime';

const Gnb = ({ isMain = true }) => {
  return (
    <Wrapper>
      {isMain ? <BasicMenu /> : <div></div>}
      <Title>
        <H1>
          <BlurOnIcon style={{ color: colors.logo, fontSize: '30px', marginRight: '10px' }} />
          <strong>SyncChecker</strong> For Oracle GoldenGate
        </H1>
      </Title>
      <Right>
        <RefreshTime />
        <Setting />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 5px 30px 5px 20px;
  border-bottom: 1px solid ${colors.bluegray150};
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

const Right = styled.div`
  display: flex;
  align-items: center;
`;

export default Gnb;
