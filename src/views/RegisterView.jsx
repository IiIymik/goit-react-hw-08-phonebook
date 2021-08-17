import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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


const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { type, value } }) => {
      switch (type) {
        case 'text':
          return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
     <Paper elevation={3} style={styles.container}>
      <Typography variant='h3' color='primary'>Join</Typography>
      <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
          <TextField
            type="text"
          label="name"
            value={name}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            type="email"
            label="email"
            variant="outlined"
            value={email}
            onChange={handleChange}
          />
          <TextField
            type="password"
            label="password"
            variant="outlined"
            value={password}
            onChange={handleChange}
          />
        <Button type="submit" color='primary' size='large' style={styles.button}>Join</Button>
      </form>
    </Paper>
  )
}

export default RegisterView
