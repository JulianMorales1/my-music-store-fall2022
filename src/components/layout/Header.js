import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from 'react-router-dom'
import userImage from '../../images/user.jpg'

export default function MenuAppBar({ isLogged }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" bgcolor="red">
        <Toolbar>
          <Typography variant="h6" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
            MyMusicStore.com
          </Typography>
          <div>
            <Link to='/sign-in'>
              {isLogged && <img src={userImage} style={{ width: '20px', height: '20px', borderRadius: '50%' }} />}
              {!isLogged && <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>}
            </Link>
            <Link to='/cart'>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
