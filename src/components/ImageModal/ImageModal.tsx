import React from "react";
import Modal from "react-modal";
import { ImageModalProps } from "../../types/types";
import styles from "./ImageModal.module.css";

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <button onClick={onRequestClose} className={styles.closeButton}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
