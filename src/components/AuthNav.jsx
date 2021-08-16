import React from 'react';
import {NavLink} from 'react-router-dom';

const styleBtn = {
  color: '#219653',
  backgroundColor: '#fff',
  padding: '10px 20px',
  filter: 'drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.4))',
  fontWeight: 'bold',
  fontSize: '15px',
  lineHeight: '18px',
  borderRadius: '5px',
  border: '1px solid #219653',
}

const styleBtnActive = {
  color: '#fff',
  backgroundColor: '#219653',
    padding: '10px 20px',
  filter: 'drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.4))',
  fontWeight: 'bold',
  fontSize: '15px',
  lineHeight: '18px',
  borderRadius: '5px',
}


const AuthNav = () => {
  return (
    <div style={{display: 'flex', gap: '5px',}}>
    <NavLink to="/login" style={styleBtn}>Login</NavLink>
    <NavLink to="/register" style={styleBtnActive}>Join</NavLink>
    </div>
  )
}

export default AuthNav
