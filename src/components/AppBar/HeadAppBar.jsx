import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn, getIsFetchingCurrent } from 'redux/auth/auth-selectors';
import AuthNav from 'components/AuthNav/AuthNav';
import { ReactComponent as SvgLogoImg} from 'files/images/Vector.svg';


const cssHeader = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '80px'
}

const cssToolBar = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

export default function HeadAppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);


  return (!isFetchingCurrent &&
    <AppBar style={cssHeader} color='light'>
      <Toolbar style={cssToolBar} >
        <SvgLogoImg height='40px' width='40px'/>
        <Typography color='primary' variant="h5" align='center' style={{fontWeight:'900',fontSize: '20px',lineHeight: '24px'}}>
          Phone Book
        </Typography>
      </Toolbar>
      <Navigation />

      {isLoggedIn ? <UserMenu/>  : <AuthNav/> }
    </AppBar>
  )
}

