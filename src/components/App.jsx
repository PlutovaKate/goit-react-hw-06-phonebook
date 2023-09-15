import { React, useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = contact => {
    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = id => {
    const filteredById = contacts.filter(contact => contact.id !== id);

    setContacts(filteredById);
  };

  const filteredByName = () => {
    const normilizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normilizeFilter)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm submit={formSubmitHandler} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter onChange={filterContacts} />

      <ContactList contacts={filteredByName()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
