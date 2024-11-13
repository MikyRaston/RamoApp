import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { BorderAllRounded, Padding } from '@mui/icons-material';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const logoStyle = {
  flex: 1,
  height: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mr: 1,
  padding: "6px",
};

const iconStyle = {
  height: "100%",
  borderRadius: 10,
  opacity: 0.7,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" color='primary'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />

          <Box component="a" href="/" sx={logoStyle}>
            <img style={iconStyle}
              src="https://ramostorage.blob.core.windows.net/ramo/RAMO.png?sp=r&st=2024-11-11T17:08:45Z&se=2030-11-12T01:08:45Z&spr=https&sv=2022-11-02&sr=c&sig=FLpqk0oR%2FsqsUAAflqrXn%2FsvAGQsnHoUB5tge%2BehDI4%3D"
              alt="RAMO"
            />
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
