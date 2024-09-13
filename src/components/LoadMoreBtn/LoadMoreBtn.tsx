import React from "react";
import { LoadMoreBtnProps } from "../../types/types";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
