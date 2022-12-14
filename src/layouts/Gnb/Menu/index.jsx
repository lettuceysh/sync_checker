import { useCallback, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link, useLocation } from 'react-router-dom';
import { URL } from '@/const/router';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { useAlertStore } from '@/store';

const BasicMenu = () => {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const { alert } = useAlertStore();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getClass = useCallback(
    (path) => {
      return location?.pathname === path ? 'on' : '';
    },
    [location?.pathname]
  );

  return (
    <Wrapper>
      <DehazeIcon onClick={handleClick} style={{ fontSize: '30px' }} />
      <CustomMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <CustomMenuItem className={getClass(URL.main)}>
          <StyledLink to={URL.main}>Dashboard</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.operationManagement)}>
          <StyledLink to={URL.operationManagement}>Operation Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.dataSourceManagement)}>
          <StyledLink to={URL.dataSourceManagement}>DataSource Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.projectManagement)}>
          <StyledLink to={URL.projectManagement}>Project Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.configuration)}>
          <StyledLink to={URL.configuration}>Job configuration</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.checkResult)}>
          <StyledLink to={URL.checkResult}>Check Result</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.userManagement)}>
          <StyledLink to={URL.userManagement}>User Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem>
          <StyledLink
            disabled
            className="disable"
            onClick={() => {
              alert({
                content: (
                  <>
                    ?????? ??????????????????.
                    <br />
                    (2022??? 12??? ??????
                  </>
                ),
                okText: 'ok'
              });
            }}
          >
            Batch Validation Configuration
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem>Logout</CustomMenuItem>
      </CustomMenu>
    </Wrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.green100};
  width: 100%;
  padding: 5px 10px;
  &.disable {
    color: ${colors.gray300};
  }
`;

const CustomMenu = styled(Menu)`
  .MuiList-root {
    /* box-shadow: 0 0 0 3px ${colors.bluegray700} inset; */
  }
`;
const CustomMenuItem = styled(MenuItem)`
  &.on {
    background-color: ${colors.green100};
    margin: 0 3px;

    a {
      color: white;
    }
  }
`;

const Wrapper = styled.div``;

export default BasicMenu;
