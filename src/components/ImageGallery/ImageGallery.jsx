import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    ),
    page: PropTypes.number.isRequired,
    // onClick: PropTypes.func.isRequired,!!!!!
  };
  render() {
    const { photos, onClick } = this.props;
    return (
      <main className={css.main}>
        <ul className={css.ImageGallery}>
          {photos.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              id={id}
              key={id}
              imageURL={webformatURL}
              tags={tags}
              // onClick={onClick}!!!!!!
            />
          ))}
        </ul>
      </main>
    );
  }
}
