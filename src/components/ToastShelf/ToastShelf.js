import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast variant="notice">{children}</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">{children}</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
