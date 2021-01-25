import axios from 'axios';
import contactActions from '../actions/contactActions';

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactActions.addContactRequest());

  axios
    .post('http://localhost:2000/contacts', { name, number })
    .then(({ data }) => {
      dispatch(contactActions.addContactSuccess(data));
    })
    .catch(error => dispatch(contactActions.addContactError(error)));
};
const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(({ data }) => dispatch(contactActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactActions.fetchContactsError(error)));
};
const deleteContact = id => dispatch => {
  dispatch(contactActions.deleteContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(contactActions.deleteContactSuccess(id));
    })
    .catch(error => dispatch(contactActions.deleteContactError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};
