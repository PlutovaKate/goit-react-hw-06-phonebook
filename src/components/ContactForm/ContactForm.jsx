import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value, number } = event.currentTarget;
    this.setState({ [name]: value, [number]: value });
  };
  onFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const doubleContact = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (doubleContact) {
      alert(`${name} is already in contacts`);
    } else {
      const id = nanoid();
      this.props.submit({ name, id, number });
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className={css.form}>
        <label htmlFor={this.id} className={css.label}>
          Name
        </label>
        <input
          onChange={this.handleChange}
          className={css.input}
          type="text"
          name="name"
          value={this.state.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <label className={css.label}>Number</label>
        <input
          onChange={this.handleChange}
          className={css.input}
          type="tel"
          name="number"
          value={this.state.number}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <button type="submit" className={css.formBtn}>
          Add Contacts
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactForm;
