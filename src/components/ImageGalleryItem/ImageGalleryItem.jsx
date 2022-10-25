import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClickOpen: PropTypes.func.isRequired,
  };

  handleImgaheClick = id => {
    this.props.onClickOpen(id);
  };

  render() {
    const { id, imageURL, tags } = this.props;

    return (
      <li
        className={css.ImageGalleryItem}
        onClick={() => this.handleImgaheClick(id)}
      >
        <img className={css.ImageGalleryItem_image} src={imageURL} alt={tags} />
      </li>
    );
  }
}
