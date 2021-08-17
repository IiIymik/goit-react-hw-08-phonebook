import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from './AuthNav.styled.js';

const AuthNav = () => {
  return (
    <Container>
    <NavLink to="/login" >Login</NavLink>
    <NavLink to="/register" >Join</NavLink>
    </Container>
  )
}

export default AuthNav
