import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import { Container, TitleMain, TitleBook, } from './App.styled.js'
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { getContacts} from 'redux/contacts/contacts-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <Form />
      <TitleBook>Contacts</TitleBook>
      <Filter />
      <ContactsList />
    </Container>
  )
};
