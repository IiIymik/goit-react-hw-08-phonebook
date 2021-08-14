import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { FaRegAddressBook } from 'react-icons/fa';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const cssHeader = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
}

export default function HeadAppBar() {
  return (
    <AppBar style={cssHeader}>
        <Toolbar>
        <Typography>
          <FaRegAddressBook /> Phone Book
        </Typography>
      </Toolbar>
      <Navigation />
      <UserMenu/>
    </AppBar>
  )
}

