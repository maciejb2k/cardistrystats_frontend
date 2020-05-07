import React from "react";
import ReCaptcha from "App/__components__/ReCaptcha";
import styles from "./FieldReCaptcha.module.scss";

function FieldReCaptcha(props) {
  return (
    <div className={styles["ReCaptcha"]}>
      <ReCaptcha {...props} />
      {
        props.meta.touched &&
                    ((props.meta.error
                        && <span
                          className={`
                                ${styles["ReCaptcha-message"]}
                                ${styles["ReCaptcha-message--error"]}
                            `}>
                          {props.meta.error}
                        </span>))
      }
    </div>
  );
}

export default FieldReCaptcha;
