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
  console.log('location', location.pathname);

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
        <CustomMenuItem className={getClass(URL.operation)}>
          <StyledLink to={URL.operation}>Operation Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.dataSource)}>
          <StyledLink to={URL.dataSource}>DataSource Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass()}>
          <StyledLink to={URL.dataSource}>Project Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass()}>
          <StyledLink to={URL.dataSource}>Job configuration</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass()}>
          <StyledLink to={URL.dataSource}>Check Result</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass()}>
          <StyledLink to={URL.dataSource}>User Management</StyledLink>
        </CustomMenuItem>
        <CustomMenuItem>
          <StyledLink
            disabled
            className="disable"
            onClick={() => {
              alert({
                content: (
                  <>
                    오픈 준비중입니다.
                    <br />
                    (2022년 12월 예정
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
    padding: 8px 12px;
    a {
      color: white;
    }
  }
`;

const Wrapper = styled.div``;

export default BasicMenu;
