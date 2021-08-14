import {NavLink} from 'react-router-dom';
import { Nav } from './Navigation.styled.js';

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </Nav>
  )
}

export default Navigation
