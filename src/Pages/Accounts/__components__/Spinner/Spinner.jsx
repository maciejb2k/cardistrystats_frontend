import React from "react";
import {SpinnerLoader} from "./Spinner.styled";

export default function Spinner(props) {
  return (
    <SpinnerLoader
      width={props.width}
      height={props.height}
      color={props.color}>
    </SpinnerLoader>
  );
}
