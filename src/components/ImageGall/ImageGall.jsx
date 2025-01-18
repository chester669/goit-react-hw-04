import React from "react";
import "./ImageGall.module.css";

function ImageGall({ images, onImageClick }) {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <div>
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGall;
