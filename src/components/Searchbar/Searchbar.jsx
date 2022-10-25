import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ifEmptySearchAlert } from '../Notiflix/Notiflix';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { searchQuery: '' };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      ifEmptySearchAlert();
    }

    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.span}>
              <FaSearch />
            </span>
          </button>

          <input
            className={css.input}
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
