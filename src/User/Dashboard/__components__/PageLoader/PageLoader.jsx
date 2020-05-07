import React from "react";

import styles from "./PageLoader.module.scss";

export default function PageLoader() {
  return (
    <div className={styles["Loader"]}>
      <div className={styles["Loader-animation"]}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
