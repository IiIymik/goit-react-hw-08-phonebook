import React from 'react';
import { Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';

export const HomeView = () => {
  return (
    <Container maxWidth="xl" style={{position: 'relative',}}>
       <div>
      <Paper elevation={3}><h1>Hello</h1></Paper>
    </div>
    </Container>
  )
}
