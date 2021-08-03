import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts =
      JSON.parse(window.localStorage.getItem('contacts')) || [];

    this.setState({ contacts: storedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts === prevState.contacts) return;

    window.localStorage.setItem(
      'contacts',
      JSON.stringify(this.state.contacts),
    );
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = evt => {
    const filter = evt.target.value.trim();

    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const { handleFilterChange, addContact, deleteContact } = this;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <Form onFormSubmit={addContact} />
        </Section>

        <Section>
          <h2>Contacts</h2>

          {contacts.length ? (
            <>
              <Filter onSearch={handleFilterChange} />
              <ContactList
                contacts={filteredContacts}
                onDelete={deleteContact}
              />
            </>
          ) : (
            <p>Phonebook is empty</p>
          )}
        </Section>
      </>
    );
  }
}

export default App;
