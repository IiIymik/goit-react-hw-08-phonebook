import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { FaRegAddressBook } from 'react-icons/fa';


export default function HeadAppBar() {
  return (
    <AppBar >
        <Toolbar>
        <Typography>
          <FaRegAddressBook /> Phone Book
        </Typography>
       </Toolbar>
      </AppBar>
  )
}

