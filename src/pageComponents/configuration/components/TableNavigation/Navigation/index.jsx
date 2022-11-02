import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import { MenuItem, MenuList } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigationItem from './Item';

const Navigation = () => {
  return (
    <Wrapper>
      <MenuList>
        <NavigationItem depth1="owner1" depth2={[{}]} />
        <NavigationItem depth1="owner1" />
      </MenuList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 150px;
  min-height: 180px;
  box-shadow: rgb(100 116 139 / 12%) 0px 10px 15px;
`;

export default Navigation;
