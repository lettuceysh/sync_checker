import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import { MenuItem, MenuList } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useTable } from '../store/useTableStore';

const NavigationItem = ({ depth1, depth2, type }) => {
  const [showSub, setShowSub] = useState(false);
  const { setSourceList, setTargetList } = useTable();

  const selectTable = () => {
    if (type === 'source') {
      setSourceList([{ test: 1 }]);
    } else {
      setTargetList([{ test: 1 }]);
    }
  };

  return (
    <Wrapper>
      <StyledMenuItem onClick={() => setShowSub((value) => !value)}>
        {depth1} <KeyboardArrowDownIcon className={showSub && 'rotate'} />
      </StyledMenuItem>
      {showSub && (
        <TwoDepth>
          <MenuList>
            <StyledMenuItem onClick={() => selectTable()}>Table1</StyledMenuItem>
            <StyledMenuItem onClick={() => selectTable()}>Table2</StyledMenuItem>
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
