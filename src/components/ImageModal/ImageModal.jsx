import React from "react";
import Modal from "react-modal";
import "./ImageModal.module.css";

function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="image-modal"
      overlayClassName="overlay"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default ImageModal;
