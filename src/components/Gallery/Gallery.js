import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ items, onClick }) => (
  <>
    <ul className={styles.gallery}>
      {items.map(item => (
        <GalleryItem
        key={item.id}
        largeImageURL={item.largeImageURL}
        webformatURL={item.webformatURL}
        likes={item.likes}
        views={item.views}
        comments={item.comments}
        downloads={item.downloads}
        tags={item.tags}
        onClick={onClick}/>
      ))}
    </ul>
  </>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Gallery;
