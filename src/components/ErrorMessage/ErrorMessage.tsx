import React from "react";
import { ErrorMessageProps } from "../../types/types";
import styles from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
