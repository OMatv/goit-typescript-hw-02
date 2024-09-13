import React from "react";
import { ImageCardProps } from "../../types/types";
import styles from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div className={styles.card} onClick={() => openModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
