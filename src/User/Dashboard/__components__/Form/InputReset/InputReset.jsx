import React from "react";

import styles from "User/Dashboard/__components__/Form/__styles__/Form.module.scss";

export default function InputReset({value, ...rest}) {
  return (
    <button
      {...rest}
      className={[
        styles["Button"],
        styles["Button--reset"],
      ].join(" ")}
    >
      {value}
    </button>
  );
}
