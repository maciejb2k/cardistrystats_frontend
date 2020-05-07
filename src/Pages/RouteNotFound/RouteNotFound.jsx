import React from "react";

import {Link} from "react-router-dom";
import {ROUTES} from "App/constants";

import styles from "./RouteNotFound.module.scss";

function RouteNotFound() {
  return (
    <div className={`${styles["NotFound"]}`}>
      <h1 className={styles["NotFound-title"]}>Oops...</h1>
      <p className={styles["NotFound-desc"]}>Looks like something went wrong and the page you're looking for doesn't exists. Server responded with 404 status.</p>
      <Link to={ROUTES.HOME} className={styles["NotFound-link"]}>Return to Home</Link>
      <img className={styles["NotFound-img"]} src="/images/cards-blue.png" alt="Messed up cards on the floor" />
    </div>
  );
}

export default RouteNotFound;
