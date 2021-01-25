import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import contactOperations from './Redux/operations/contactOperations';
import selectors from './Redux/selectors';
import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <div className={styles.wrapper}>
        <ContactForm />
        <CSSTransition
          in={contacts.length > 1}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
