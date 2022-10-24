import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';
import { URL } from '@/const/router';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <DehazeIcon onClick={handleClick} style={{ fontSize: '40px' }} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem>
          <StyledLink to={URL.main}>Dashboard</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={URL.operation}>Operation Management</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={URL.dataSource}>DataSource Management</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={URL.dataSource}>Project Management</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={URL.dataSource}>Job configuration</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={URL.dataSource}>Check Result</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={URL.dataSource}>User Management</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink disabled className="disable">
            Batch Validation Configuration
          </StyledLink>
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Wrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.green100};
  &.disable {
    color: ${colors.gray300};
  }
`;

const Wrapper = styled.div``;

export default BasicMenu;