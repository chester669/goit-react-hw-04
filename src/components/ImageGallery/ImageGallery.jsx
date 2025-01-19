import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.imageGalleryItem}>
          <ImageCard
            imageUrl={image.urls.small}
            altText={image.alt_description || "Image"}
            onClick={() => onImageClick(image)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
