import React from "react";
import "./Emoji.scss";

function Emoji(props) {
  return (
    <span
      className="Emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? false : true}
    >
      {props.symbol}
    </span>
  );
}

export default Emoji;
