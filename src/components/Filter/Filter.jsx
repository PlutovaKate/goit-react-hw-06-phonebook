import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <div className={css.filter}>
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Enter search name"
        onChange={onChange}
        value={filter}
        className={css.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
