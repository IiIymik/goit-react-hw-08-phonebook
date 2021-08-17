import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const containerCss = {
  display: 'flex',
  width: '600px',
  padding: '20px',
}

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Paper elevation={3} style={containerCss}>
      <Typography>Страница логина</Typography>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label >
          Почта
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label >
          Пароль
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </Paper>
  )
}
