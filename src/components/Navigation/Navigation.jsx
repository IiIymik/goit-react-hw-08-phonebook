import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { Nav } from './Navigation.styled.js';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();
  const isContactsPage = location.pathname === '/contacts';

  return (
    <Nav>
      {isLoggedIn && !isContactsPage &&(<NavLink to="/contacts">MY CONTACTS</NavLink>)}
    </Nav>
  )
}

export default Navigation
