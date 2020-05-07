import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import {ROUTES} from "App/constants";

import DashboardSidebar from "./__components__/DashboardSidebar";
import DashboardHeader from "./__components__/DashboardHeader";
import Home from "./Home";
import Stats from "./Stats";
import Flourishes from "./Flourishes/Flourishes";
import Decks from "./Decks";
import Settings from "./Settings";

import "./__styles__/Dashboard.scss";
import styles from "./__styles__/Dashboard.module.scss";

export default function Dashboard(props) {
  const {appState: {isNavActive}, toggleNav} = props;

  return (
    <div className={styles["Dash"]}>
      <DashboardSidebar isNavActive={isNavActive} toggleNav={toggleNav} />
      <div className={`${styles["DashMain"]} ${isNavActive ? styles["DashMain--active"] : ""}`}>
        <div onClick={toggleNav} className={styles["DashOverlay"]}></div>
        <DashboardHeader isNavActive={isNavActive} toggleNav={toggleNav} />
        <main className={`${styles["DashContent"]} animated fadeIn`}>
          <Switch>
            <Route exact path={ROUTES.USER.HOME} render={() => <Home />}></Route>
            <Route exact path={ROUTES.USER.STATS} render={() => <Stats />}></Route>
            <Route path={ROUTES.USER.FLOURISHES.BASE} render={() => <Flourishes />}></Route>
            <Route exact path={ROUTES.USER.DECKS} render={() => <Decks />}></Route>
            <Route exact path={ROUTES.USER.SETTINGS} render={() => <Settings />}></Route>
            <Redirect to={ROUTES.HOME} />
          </Switch>
        </main>
      </div>
    </div>
  );
}
