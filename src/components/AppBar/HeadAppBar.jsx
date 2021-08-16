import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { FaRegAddressBook } from 'react-icons/fa';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn, getIsFetchingCurrent } from 'redux/auth/auth-selectors';
import AuthNav from 'components/AuthNav';

const cssHeader = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
}

export default function HeadAppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);


  return (!isFetchingCurrent &&
    <AppBar style={cssHeader}>
        <Toolbar>
        <Typography>
          <FaRegAddressBook /> Phone Book
        </Typography>
      </Toolbar>
      <Navigation />

      {isLoggedIn ? <UserMenu/>  : <AuthNav/> }
    </AppBar>
  )
}

