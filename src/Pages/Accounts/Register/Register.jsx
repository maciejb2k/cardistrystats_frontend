import React, {Fragment} from "react";
import {Form, Field, reduxForm, SubmissionError} from "redux-form";
import {Link} from "react-router-dom";

import {ROUTES} from "App/constants";
import {required} from "App/__utils__/rootValidators";

import FieldCheckbox from "Pages/Accounts/__components__/FieldCheckbox";
import FieldInput from "Pages/Accounts/__components__/FieldInput";
import FieldReCaptcha from "Pages/Accounts/__components__/FieldReCaptcha";

import styles from "Pages/Accounts/__styles__/AccountsForm.module.scss";

function Register(props) {
  const {handleSubmit, submitting, error} = props;

  const onFormSubmit = (data) => {
    return new Promise((resolve) => setTimeout(resolve, 1000))
      .then(() => {
        console.log(data);
        throw new SubmissionError({_error: "Zjebalo sie XD"});
      });
  };
  return (
    <Fragment>
      <header className={styles["FormHeader"]}>
        <h2 className={styles["FormHeader-title"]}>Create <span className={styles["FormHeader-title--coloured"]}>Account</span></h2>
        <p className={styles["FormHeader-text"]}>Experience easier cardistry management!</p>
      </header>
      {error && <p className={styles["FormBody-error"]}>Error: {error}</p>}
      <Form className={styles["FormBody"]} onSubmit={handleSubmit(onFormSubmit)}>
        <Field
          component={FieldInput}
          label="Username"
          placeholder="John Doe"
          name="username"
          type="text"
          htmlid="username"
          validate={[required]}
        />
        <Field
          component={FieldInput}
          label="E-Mail"
          placeholder="example@mail.com"
          name="email"
          type="E-Mail"
          htmlid="email"
          validate={[required]}
        />
        <Field
          component={FieldInput}
          label="Password"
          placeholder="········"
          name="password"
          type="password"
          htmlid="password"
          validate={[required]}
        />
        <Field
          component={FieldInput}
          label="Repeat Password"
          placeholder="········"
          name="passwordRepeat"
          type="password"
          htmlid="passwordRepeat"
          validate={[required]}
        />
        <Field
          component={FieldCheckbox}
          name="hasAgreedTerms"
          type="checkbox"
          htmlid="hasAgreedTerms"
          validate={[required]}
        >I agree with our terms of use.</Field>
        <Field
          component={FieldReCaptcha}
          name="reCaptcha"
          validate={[required]}
        />
        <button className={styles["FormBody-submitButton"]} disabled={submitting}>
                    Register
        </button>
      </Form>
      <footer className={styles["FormFooter"]}>
        <Link className={styles["FormFooter-link"]} to={ROUTES.ACCOUNTS.SIGN_IN}>Arleady have an account? Sign In.</Link>
      </footer>
    </Fragment>
  );
}

const registerForm = reduxForm({
  form: "accountRegisterForm",
  initialValues: {
    username: "",
    email: "",
    password: "",
    hasAgreedTerms: false,
    reCaptcha: null,
  },
})(Register);

export default registerForm;
