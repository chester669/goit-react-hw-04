import React from "react";
import styles from "./ErrorMsg.module.css";

function ErrorMsg({ message }) {
  return <div className={styles.error}>{message}</div>;
}

export default ErrorMsg;
