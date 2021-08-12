import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/contacts/contacts-reducer';

// const middleware = [];

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  // middleware,
});

// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());
