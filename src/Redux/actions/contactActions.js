import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contact/addRequest');
const addContactSuccess = createAction('contact/addSuccess');
const addContactError = createAction('contact/addError');

const fetchContactsRequest = createAction('contact/fetchRequest');
const fetchContactsSuccess = createAction('contact/fetchSuccess');
const fetchContactsError = createAction('contact/fetchError');

const deleteContactRequest = createAction('contact/deleteRequest');
const deleteContactSuccess = createAction('contact/deleteSuccess');
const deleteContactError = createAction('contact/deleteError');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
