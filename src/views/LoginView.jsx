import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Notify from 'components/Notify/Notify';



const styles = {
  container: {
      display: 'flex',
  width: '300px',
  padding: '20px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
  },
  form: {
    display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  },
  button: {
    color: '#219653',
      backgroundColor: '#fff',
      padding: '10px 20px',
      fontWeight: 'bold',
      fontSize: '15px',
      lineHeight: '18px',
      border: '1px solid #219653',
      borderRadius: '5px',
  }
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { type, value } }) => {
    switch (type) {
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

    const checkValue =  email === '' || password === '';

    if (checkValue) {
      return Notify();
    }
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Paper elevation={3} style={styles.container}>
      <Typography variant='h3' color='primary'>Login</Typography>

      <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
          <TextField
            type="email"
          value={email}
           label="Email"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            type="password"
          value={password}
           label="Password"
            variant="outlined"
            onChange={handleChange}
          />
        <Button type="submit" color='primary' size='large' style={styles.button}>Login</Button>
      </form>
    </Paper>
  )
}
