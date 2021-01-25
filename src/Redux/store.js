import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducers from './reducer/contactsReducers';
import filterReducers from './reducer/filterReducers';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducers,
  },
  middleware: [...defaultMiddleware],
});

export default store;
