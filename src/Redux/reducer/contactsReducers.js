import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from '../actions/contactActions';

const addContact = (state, action) => {
  return [...state, action.payload];
};
const deleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const phoneBookReducer = createReducer([], {
  [contactActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactActions.addContactSuccess]: addContact,
  [contactActions.deleteContactSuccess]: deleteContact,
});

export default combineReducers({
  phoneBookReducer,
});
