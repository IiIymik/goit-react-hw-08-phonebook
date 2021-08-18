import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn, getIsFetchingCurrent } from 'redux/auth/auth-selectors';
import BtnAuthNav from 'components/AuthNav/AuthNav';
import { ReactComponent as SvgLogoImg} from 'files/images/Vector.svg';


const cssHeader = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 2fr',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80px'
}

const cssToolBar = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginLeft: '350px'
}

export default function HeadAppBar({onClick}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);


  return (!isFetchingCurrent &&
    <AppBar style={cssHeader} color='secondary'>
        <Link to='/'>
      <Toolbar style={cssToolBar} >
        <SvgLogoImg height='40px' width='40px'/>
          <Typography color='primary' variant="h5" align='center' style={{ fontWeight: '900', fontSize: '20px', lineHeight: '24px', }}>
          Phone Book
        </Typography>
        </Toolbar>
        </Link>

      <Navigation />

      {isLoggedIn ? <UserMenu /> : <BtnAuthNav onClick={onClick}/> }
    </AppBar>
  )
}

