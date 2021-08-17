import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { Nav } from './Navigation.styled.js';
import {getIsLoggedIn} from 'redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Nav>
      {isLoggedIn && (<NavLink to="/contacts">MY CONTACTS</NavLink>)}
    </Nav>
  )
}

export default Navigation
