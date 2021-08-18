import React from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import {  ButtonDel } from './ContactsList.styled.js';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const style = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '12px',
    alignItems: 'stretch',
  }
}
const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

// const breakpoints= {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// };

  return (
    <>
      <Masonry
      breakpointCols={4}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
            {contacts.length > 0 && contacts.map(({ id, name, number }) => (
              <div key={id} >
               <Card elevation={4} style={style.card}>
               <Typography variant='h6' color='primary' align='center'> {name}: {number} </Typography>
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

