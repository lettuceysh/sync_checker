import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import { MenuItem, MenuList } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const NavigationItem = ({ depth1, depth2 }) => {
  const [showSub, setShowSub] = useState(false);

  return (
    <Wrapper>
      <StyledMenuItem onClick={() => setShowSub((value) => !value)}>
        {depth1} <KeyboardArrowDownIcon className={showSub && 'rotate'} />
      </StyledMenuItem>
      {showSub && (
        <TwoDepth>
          <MenuList>
            <StyledMenuItem>Table1</StyledMenuItem>
            <StyledMenuItem>Table2</StyledMenuItem>
          </MenuList>
        </TwoDepth>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledMenuItem = styled(MenuItem)`
  > svg {
    margin-left: 10px;
    fill: ${colors.gray800};

    &.rotate {
      transform: rotate(180deg);
    }
  }
`;

const TwoDepth = styled.div`
  padding-left: 30px;
`;

export default NavigationItem;
