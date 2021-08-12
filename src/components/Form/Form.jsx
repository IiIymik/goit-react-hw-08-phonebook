import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import {getVisibleContacts} from 'redux/contacts/contacts-selectors';
import nanoid from '../../utils/nanoid.js';
import { FormEl, Input, TitleInput, Button, } from './Form.styled.js';

export default function Form() {
  const dispatch = useDispatch();
  const data = useSelector(getVisibleContacts)
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      id: nanoid(),
      name,
      number,
    };

    const compare = checkContact(data, obj);

    if (compare) {
      alert(`${compare.name} is already in contacts`)
      return reset();
    }
    dispatch(addContact(obj));
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const checkContact = (contacts, obj) => {
    const { name } = obj;
    const normalizedName = name.toLowerCase();
    return contacts.find(contact => contact.name.toLowerCase().includes(normalizedName))
  }

  return (
    <FormEl onSubmit={handleSubmit}>
      <TitleInput>Name</TitleInput>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={(e) => setName(e.currentTarget.value)}
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <TitleInput>Number</TitleInput>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        onChange={(e) => setNumber(e.currentTarget.value)}
        value={number}
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Button type="submit">Add contact</Button>
    </FormEl>
  )
}








