import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RefreshTime from './components/RefreshTime';

const Setting = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [isShowRefreshTime, setIsShowRefreshTime] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showRefreshTime = () => {
    setIsShowRefreshTime(true);
    setAnchorEl(null);
  };

  return (
    <div>
      <EngineeringIcon onClick={handleClick} fontSize="large" />

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
