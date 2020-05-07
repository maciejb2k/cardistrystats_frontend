import React, {Fragment, useEffect} from "react";
import {useDispatch} from "react-redux";
import {logout} from "Pages/Accounts/actions";

import Spinner from "Pages/Accounts/__components__/Spinner";

import styles from "Pages/Accounts/__styles__/AccountsForm.module.scss";

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Fragment>
      <header className={styles["FormHeader"]}>
        <h2 className={styles["FormHeader-title"]}>Logging <span className={styles["FormHeader-title--coloured"]}>Out</span></h2>
      </header>
      <Spinner
        color="#000000"
        width="50px"
        height="50px">
      </Spinner>
    </Fragment>
  );
}
