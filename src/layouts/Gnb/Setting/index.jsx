import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RefreshTime from './components/RefreshTime';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { useNavigate, useRoutes } from 'react-router-dom';
import { URL } from '@/const/router';
const Setting = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [isShowRefreshTime, setIsShowRefreshTime] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate(URL.login);
  };

  const showRefreshTime = () => {
    setIsShowRefreshTime(true);
    setAnchorEl(null);
  };

  return (
    <div>
      <ManageHistoryIcon onClick={handleClick} style={{ fontSize: '40px' }} />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={showRefreshTime}>Screen Refresh Time</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <RefreshTime open={isShowRefreshTime} onClose={() => setIsShowRefreshTime(false)} />
    </div>
  );
};

export default Setting;
