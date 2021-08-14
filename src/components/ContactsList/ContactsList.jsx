import React from 'react';
import { useSelector } from 'react-redux';
import { List, Item, ButtonDel } from './ContactsList.styled.js';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { useDispatch } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Contacts</h1>
      <List>
            {contacts.length > 0 && contacts.map(({ id, name, number }) => (
                <Item key={id} >{name}: {number}
                    <ButtonDel type="button" onClick={()=>dispatch(deleteContact(id))}>Delete</ButtonDel>
                </Item>
            ))}
      </List>
      </>
    )
}

export default ContactsList
