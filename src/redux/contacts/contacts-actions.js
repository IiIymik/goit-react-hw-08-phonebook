import { createAction } from '@reduxjs/toolkit';

// Fetch contacts
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');
// Add contacts
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');
// Delete contacts
export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');
//Add Filter value
export const changeFilterValue = createAction('contacts/changeFilterValue');
// Update contact
// export const updateContactRequest = createAction('contacts/updateContactRequest');
// export const updateContactSuccess = createAction('contacts/updateContactSuccess');
// export const updateContactError = createAction('contacts/updateContactError');
