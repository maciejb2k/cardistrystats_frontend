import React from "react";
import styles from "./DataTableCheckbox.module.scss";

export default function DataTableCheckbox(props) {
  return (
    <div onClick={props.onClick} className={styles["Checkbox"]}>
      <input
        id={props.htmlid}
        type="checkbox"
        className={styles["Checkbox-input"]}
        onChange={props.onChange}
        keyid={props.keyid}
        checked={props.checked}
        rowid={props.rowid}
      />
      <label
        className={`${styles["Checkbox-label"]}`}
        htmlFor={props.htmlid}
      />
    </div>
  );
}
