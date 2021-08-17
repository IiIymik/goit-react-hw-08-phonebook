import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { getContacts } from 'redux/contacts/contacts-operations';

const style = {
  container: {
    display: 'flex',
    gap: '10px',
  },
  card: {
    padding: '20px',
  },
  title: {
    marginBottom: '20px'
  }

}

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()),[dispatch])
  return (
    <Container style={style.container}>
      {/* list contacts */}
      <Paper elevation={3} style={style.card}>
         <Typography variant='h6' color='primary' align='center' style={style.title}>My contacts</Typography>
      <Filter />
      <ContactsList />
      </Paper>
    {/* add contacts */}
      <Paper elevation={3} style={style.card}>
        <Typography variant='h6' color='primary' align='center' style={style.title}>Add new contact</Typography>
      <Form />
      </Paper>

    </Container>
  )
}
