import { createSelector } from 'reselect';

const getContacts = state => state.contacts.phoneBookReducer;
const getFilter = state => state.filter.filterContactReducer;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      !filter ? true : contact.name.toLowerCase().includes(filter),
    );
  },
);

export default {
  getContacts,
  getFilter,
  getVisibleContacts,
};
