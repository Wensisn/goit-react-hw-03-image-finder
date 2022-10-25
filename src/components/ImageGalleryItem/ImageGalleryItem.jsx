import PropTypes from 'prop-types';
// import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  imageURL,
  tags,
  largeImageURL,
  onOpenImage,
}) => {
  const fullImage = () => onOpenImage(largeImageURL);

  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img
        className={css.ImageGalleryItem_image}
        src={imageURL}
        alt={tags}
        onClick={fullImage}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  photos: PropTypes.shape({
    photos: PropTypes.array.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onOpenImage: PropTypes.func.isRequired,
};

// export class ImageGalleryItem extends Component {
//   static propTypes = {
//     id: PropTypes.number.isRequired,
//     imageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     onOpenImage: PropTypes.func.isRequired,
//   };

//   // handleImgaheClick = id => {
//   //   this.props.onClick(id);
//   //   console.log(this.props.onClick(id));
//   // };!!!!!!

//   render() {
//     const { id, imageURL, tags } = this.props;

//     return (
//       <li className={css.ImageGalleryItem} key={id} onClick={this.onOpenImage}>
//         <img className={css.ImageGalleryItem_image} src={imageURL} alt={tags} />
//       </li>
//     );
//   }
// }
