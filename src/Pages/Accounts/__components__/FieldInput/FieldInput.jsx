import React from "react";
import styles from "./FieldInput.module.scss";

function FieldInput(props) {
  return (
    <div className={styles["Input"]}>
      <label className={styles["Input-label"]} htmlFor={props.htmlid}>{props.label}</label>
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
      <div className={styles["Input-innerWrapper"]}>
        <input
          {...props.input}
          className={`
                        ${styles["Input-input"]} 
                        ${props.type === "password" && styles["Input-input--password"]}
                        ${props.meta.touched && props.meta.error && styles["Input-input--error"]}
                    `}
          type={props.type}
          placeholder={props.placeholder}
          id={props.htmlid}
        />
        <span className={styles["Input-focusBorder"]}></span>
      </div>
    </div>
  );
}

export default FieldInput;
