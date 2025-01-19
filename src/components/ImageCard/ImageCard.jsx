import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, altText, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={imageUrl} alt={altText} className={styles.imageCardImg} />
    </div>
  );
};

export default ImageCard;
