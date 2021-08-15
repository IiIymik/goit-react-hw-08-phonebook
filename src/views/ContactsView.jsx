import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from '@material-ui/core/Container';
import { getContacts } from 'redux/contacts/contacts-operations';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()),[dispatch])
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  )
}
