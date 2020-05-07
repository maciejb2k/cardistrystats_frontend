import React from "react";
import {Link} from "react-router-dom";
import Logo from "App/__components__/Logo";

import {ROUTES} from "App/constants";

import styles from "./DashboardHeader.module.scss";

export default function DashboardHeader(props) {
  const {toggleNav} = props;

  return (
    <header className={`${styles["DashHeader"]} animated fadeIn`}>
      <button onClick={toggleNav} className={`${styles["Hamburger"]}`} aria-label="Toggle Sidebar" aria-expanded="false">
        <span className={styles["Hamburger-bar"]}></span>
        <span className={styles["Hamburger-bar"]}></span>
        <span className={styles["Hamburger-bar"]}></span>
      </button>
      <div className={styles["DashHeader-logo"]}>
        <Link to={ROUTES.HOME}>
          <Logo
            sidecolor="#404040"
            maincolor="#77b05e"
          />
        </Link>
      </div>
      <div className={styles["DashHeader-right"]}>
        <img src="/images/avatar.png" className={styles["DashHeader-avatar"]} alt="User avatar"/>
      </div>
    </header>
  );
}
