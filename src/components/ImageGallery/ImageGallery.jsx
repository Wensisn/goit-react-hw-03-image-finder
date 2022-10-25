import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
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
    onOpenImage: PropTypes.func.isRequired,
  };
  render() {
    const { photos, onOpenImage } = this.props;
    return (
      <main className={css.main}>
        <ul className={css.ImageGallery}>
          {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              id={id}
              imageURL={webformatURL}
              tags={tags}
              onOpenImage={onOpenImage}
              largeImageURL={() => largeImageURL}
            />
          ))}
        </ul>
      </main>
    );
  }
}
