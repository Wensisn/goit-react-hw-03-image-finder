import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClick, children }) => {
  return (
    <footer className={css.footer}>
      <button className={css.button} type="button" onClick={onClick}>
        {children}
      </button>
    </footer>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
