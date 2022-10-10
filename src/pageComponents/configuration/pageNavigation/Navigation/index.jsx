import React, { useState } from 'react';
import { MenuItem, MenuList } from '@mui/material';

const Navigation = () => {
  return (
    <MenuList>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuList>
  );
};

export default Navigation;
