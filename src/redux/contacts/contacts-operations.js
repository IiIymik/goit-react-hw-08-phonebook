import axios from 'axios';
import * as contactsActions from './contacts-actions';

export const getContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(e => dispatch(contactsActions.addContactError(e)));
};

export const deleteContact = contactId => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(contactId)))
    .catch(e => dispatch(contactsActions.deleteContactError(e)));
};

// export const updateContact = contactId => async dispatch => {
//   dispatch(contactsActions.updateContactRequest());
//   try {
//     const { data } = axios.patch(`/contacts/${contactId}`);
//     dispatch(contactsActions.updateContactSuccess);
// } catch (error) {
// dispatch(contactsActions.updateContactError(error));
// }
// }
