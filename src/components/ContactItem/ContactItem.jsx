import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ name, id, number, deleteContact }) => {
  return (
    <li id={id} className={css.item}>
      <div className={css.information}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
      </div>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.btn}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
