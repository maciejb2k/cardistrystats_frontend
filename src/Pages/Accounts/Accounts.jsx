import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Route, Switch, Redirect, Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";

import {ROUTES} from "App/constants";
import {history} from "App/__store__";

import Logo from "App/__components__/Logo";
import Emoji from "App/__components__/Emoji";

import Register from "./Register";
import SignIn from "./SignIn";
import Logout from "./Logout";

import styles from "./__styles__/Accounts.module.scss";

function Accounts() {
  const isAuthenticated = useSelector((state) => state.accounts.isAuthenticated);
  const routerPath = useSelector((state) => state.router.location.pathname);

  useEffect(() => {
    if (isAuthenticated && routerPath !== ROUTES.ACCOUNTS.LOGOUT) {
      history.push(ROUTES.HOME);
    }
  }, [isAuthenticated, routerPath]);

  return (
    <div className={styles["AccountWrapper"]}>
      <aside className={styles["AccountBackground"]}>
        <Link to={ROUTES.HOME} className={styles["AccountBackground-backButton"]} aria-label="Back to HomePage">
          <FaArrowLeft />
        </Link>
      </aside>
      <main className={styles["AccountContent"]}>
        <header className={styles["AccountHeader"]}>
          <Link to={ROUTES.HOME} aria-label="Back to HomePage">
            <Logo />
          </Link>
        </header>
        <section className={styles["AccountBody"]}>
          <Switch>
            <Route exact path={ROUTES.ACCOUNTS.SIGN_IN} component={SignIn}></Route>
            <Route exact path={ROUTES.ACCOUNTS.REGISTER} component={Register}></Route>
            <Route exact path={ROUTES.ACCOUNTS.LOGOUT} component={Logout}></Route>
            <Redirect to={ROUTES.HOME} />
          </Switch>
        </section>
        <footer className={styles["AccountFooter"]}>
          <p className={styles["AccountFooter-content"]}>Cardistry is not Magic! <Emoji symbol="🧙‍" label="Wizard"/></p>
        </footer>
      </main>
    </div>
  );
}

export default Accounts;
