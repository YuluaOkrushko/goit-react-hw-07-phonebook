import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import contactOperations from '../../Redux/operations/contactOperations';
import selectors from '../../Redux/selectors';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';

class ContactList extends Component {
  handleDeleteContact = id => () => {
    const { deleteContact } = this.props;
    deleteContact(id);
  };
  render() {
    const { contacts } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.item}>
        {contacts.map(item => (
          <CSSTransition key={item.id} timeout={250} classNames={styles}>
            <li className={styles.list}>
              {item.name} : {item.number}
              <button
                className={styles.button}
                id={item.id}
                onClick={this.handleDeleteContact(item.id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactOperations.deleteContact(id)),
});

const mapStateToProps = state => {
  return { contacts: selectors.getVisibleContacts(state) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
