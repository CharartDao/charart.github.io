import {createImageFromBlob} from './create-image-from-blob';
import useQueries from '../hooks/use-queries';
import { Avatar, Box, IconButton, makeStyles, Theme } from '@mui/material';
import { PROFILE } from '../routes/public';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Header: React.FC = () => {
  const history = useHistory();
  //const { isDesktop } = useQueries();
  const [avatar, setAvatar] = React.useState<string | undefined>(undefined);
  const [userRole, setUserRole] = React.useState<string[]>([]);

  const handleManageProfile = () => {
    history.push(PROFILE);
  };

  return (
    <Box display="flex">
      <Box mr={'1rem'}>
        <IconButton id="headerProfile_button" onClick={handleManageProfile} >
          {avatar ? (
            <img src={avatar} alt="Profile Picture" />
          ) : (
            <Avatar alt="Profile Picture" />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;