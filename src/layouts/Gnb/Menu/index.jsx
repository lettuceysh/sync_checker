import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';
import { URL } from '@/const/router';

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
    <div>
      <DehazeIcon onClick={handleClick} fontSize="large" />
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
          <Link to={URL.main}>Dashboard</Link>
        </MenuItem>
        <MenuItem>
          <Link to={URL.operation}>Operation Management</Link>
        </MenuItem>
        <MenuItem>
          <Link to={URL.dataSource}>dataSouce Management</Link>
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default BasicMenu;
