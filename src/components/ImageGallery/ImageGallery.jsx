import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

  galleryRef = React.createRef();

  componentDidUpdate(prevProprs) {
    if (prevProprs.page !== this.props.page && this.props.page > 2) {
      this.scrollToPage();
    }
  }

  scrollToPage = () => {
    const imageRect =
      this.galleryRef.current?.firstElementChild?.getBoundingClientRect();

    if (imageRect) {
      window.scrollBy({
        top: imageRect.height * (window.innerHeight / imageRect.height - 1),
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { photos, onOpenImage } = this.props;
    return (
      <main className={css.main}>
        <ul className={css.ImageGallery} ref={this.galleryRef}>
          {photos.map(photo => (
            <ImageGalleryItem
              key={photo.id}
              id={photo.id}
              imageURL={photo.webformatURL}
              tags={photo.tags}
              onClickOpen={onOpenImage}
            />
          ))}
        </ul>
      </main>
    );
  }
}
