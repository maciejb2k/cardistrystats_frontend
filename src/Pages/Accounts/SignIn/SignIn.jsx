import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {Form, Field} from "redux-form";

import {ROUTES} from "App/constants";
import {required, email, minLength4, maxLength254} from "App/__utils__/rootValidators";

import FieldCheckbox from "Pages/Accounts/__components__/FieldCheckbox";
import FieldInput from "Pages/Accounts/__components__/FieldInput";

import styles from "Pages/Accounts/__styles__/AccountsForm.module.scss";

export default function SignIn(props) {
  const {signIn, appState, handleSubmit} = props;

  const onFormSubmit = (data) => {
    // TODO Yup validation
    signIn(data);
  };

  return (
    <Fragment>
      <header className={styles["FormHeader"]}>
        <h2 className={styles["FormHeader-title"]}>Sign <span className={styles["FormHeader-title--coloured"]}>In</span></h2>
        <p className={styles["FormHeader-text"]}>Jump into your cardistry world right now.</p>
      </header>
      {appState.error && <p className={styles["FormError"]}><b>Error:</b> {appState.error.data.detail}</p>}
      <Form className={styles["FormBody"]} onSubmit={handleSubmit(onFormSubmit)}>
        <Field
          component={FieldInput}
          label="E-Mail"
          placeholder="example@mail.com"
          name="email"
          type="E-Mail"
          htmlid="email"
          validate={[required, email, maxLength254]}
        />
        <Field
          component={FieldInput}
          label="Password"
          placeholder="········"
          name="password"
          type="password"
          htmlid="password"
          validate={[required, minLength4, maxLength254]}
        />
        <Field
          component={FieldCheckbox}
          name="rememberMe"
          type="checkbox"
          htmlid="rememberMe"
        >
                    Remember me
        </Field>
        <button className={styles["FormBody-submitButton"]} disabled={appState.isLoading}>
                    Sign In
        </button>
      </Form>
      <footer className={styles["FormFooter"]}>
        <Link className={styles["FormFooter-link"]} to={ROUTES.ACCOUNTS.FORGOT}>Forgot password?</Link>
        <Link className={styles["FormFooter-link"]} to={ROUTES.ACCOUNTS.REGISTER}>Don't have account?</Link>
      </footer>
    </Fragment>
  );
}
