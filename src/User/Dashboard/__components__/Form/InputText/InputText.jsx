import React from "react";

import styles from "User/Dashboard/__components__/Form/__styles__/Form.module.scss";

export default function InputText({input, meta, label, ...rest}) {
  return (
    <div className={styles["InputWrapper"]}>
      <div className={styles["InputHeader"]}>
        <label className={styles["Label"]}>
          {label}
        </label>
        {meta.error && meta.touched &&
          <span className={styles["Error"]}>
            {meta.error}
          </span>
        }
      </div>
      <input
        {...input}
        {...rest}
        className={`
          ${styles["Input"]}
          ${styles["Input--text"]}
          ${meta.error && meta.touched ? `${styles["Input--error"]}` : ""}
        `}
      />
    </div>
  );
}
