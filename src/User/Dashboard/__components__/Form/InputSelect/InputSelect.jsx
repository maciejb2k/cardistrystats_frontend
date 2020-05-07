import React from "react";

import styles from "User/Dashboard/__components__/Form/__styles__/Form.module.scss";

export default function InputSelect({input, meta, label, ...rest}) {
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
      <select
        {...input}
        {...rest}
        className={`
        ${styles["Input"]}
        ${styles["Input--select"]}
        ${meta.error && meta.touched ? `${styles["Input--error"]}` : ""}
      `}
      >
        <option></option>
        {rest.children}
      </select>
    </div>
  );
}
