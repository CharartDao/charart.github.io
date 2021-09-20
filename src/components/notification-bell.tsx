import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material//Badge';
import IconButton from '@mui/material/IconButton';
import { createStyles, makeStyles, Theme, withStyles } from '@mui/material/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NOTIFICATION } from '../routes/public';

const NotificationBell: React.FC = () => {
  const history = useHistory();

  const [notificationCount, setNotificationCount] = useState(0);

  const handleBellClick = () => {
    history.push(NOTIFICATION);
  };

  return (
    <IconButton aria-label="notifications" id="notificationBell_button" color="primary" onClick={handleBellClick}>
      <Badge badgeContent={notificationCount} color="secondary" showZero={false}>
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationBell;