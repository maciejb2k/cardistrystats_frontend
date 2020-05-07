import React from "react";
import styles from "./FieldCheckbox.module.scss";

function FieldCheckbox(props) {
  return (
    <div className={styles["Checkbox"]}>
      <input
        {...props.input}
        id={props.htmlid}
        className={styles["Checkbox-input"]}
        type={props.type}
      />
      <label
        className={`
                    ${styles["Checkbox-label"]}
                    ${props.meta.touched && props.meta.error && styles["Checkbox-label--error"]}
                `}
        htmlFor={props.htmlid}>{props.children}</label>
      {
        props.meta.touched &&
                    ((props.meta.error
                        && <span
                          className={`
                                ${styles["Input-message"]}
                                ${styles["Input-message--error"]}
                            `}>
                            - {props.meta.error}
                        </span>)
                    ||(props.meta.warning
                        && <span
                          className={`
                                ${styles["Input-message"]}
                                ${styles["Input-message--warning"]}
                            `}>
                            - {props.meta.warning}
                        </span>
                    ))
      }
    </div>
  );
}

export default FieldCheckbox;
