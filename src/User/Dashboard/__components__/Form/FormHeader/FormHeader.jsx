import React from "react";

import styles from "User/Dashboard/__components__/Form/__styles__/Form.module.scss";

export default function FormHeader({title, desc}) {
  return (
    <div className={styles["FormHeader"]}>
      <h2 className={styles["FormHeader-title"]}>{title}</h2>
      <p className={styles["FormHeader-desc"]}>{desc}</p>
    </div>
  );
}
