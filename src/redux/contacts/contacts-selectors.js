import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    let isNum = /^\d+$/.test(normalizedFilter);

    if (isNum) {
      return contacts.filter(({ number }) => number.includes(normalizedFilter));
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
