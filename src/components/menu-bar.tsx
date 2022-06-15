import MenuIcon from '@mui/icons-material/Menu';
import { AppBar as AppBarMat, Box, Button, Toolbar } from '@mui/material';
import { DIGITALART } from '../routes/public';
import React from 'react';
import { Link } from 'react-router-dom';
import NotificationBell from './notification-bell';
import Profile from './profile';
import logo192 from '..//logo.svg';

const MenuBar: React.FC = () => {

  const handleOpenDrawer = () => {
    console.log(0);
  };

  return (
    <AppBarMat position="sticky">
      <Toolbar disableGutters>
        <Box>
          <Button
            id="appbar_menuButton"
            startIcon={<MenuIcon />}
            color="inherit"
            onClick={handleOpenDrawer}
          />
        </Box>
        <Box textAlign="center">
          <Link href="#" id="Header_Title_Link" color="inherit" to={DIGITALART}>
            <img src={logo192} width={83} />
          </Link>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <NotificationBell />
          <Profile />
        </Box>
      </Toolbar>
    </AppBarMat>
  );
};

export default MenuBar;