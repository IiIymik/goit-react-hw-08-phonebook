import React from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import { List, Item, ButtonDel } from './ContactsList.styled.js';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card'

const style = {
  card: {
    padding: '20px',
  }
}
const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

const breakpoints= {
  default: 4,
  1100: 4,
  700: 3,
  500: 2,
  400:1
};

  return (
    <>
      <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
            {contacts.length > 0 && contacts.map(({ id, name, number }) => (
              <div key={id} >
               <Card style={style.card}>
                {name}: {number}
                <ButtonDel type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDel>
                {/* <button type="button">Edit</button> */}
                </Card>
                </div>
            ))}
      </Masonry>
      </>
    )
}

export default ContactsList

