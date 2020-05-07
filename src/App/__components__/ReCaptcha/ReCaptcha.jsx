import React, {Fragment} from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = (props) => (
  <Fragment>
    <ReCAPTCHA sitekey="" onChange={props.input.onChange}></ReCAPTCHA>
  </Fragment>
);

export default ReCaptcha;
