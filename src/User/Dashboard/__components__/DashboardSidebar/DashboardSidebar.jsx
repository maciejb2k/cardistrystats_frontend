import React, {useEffect, useState} from "react";
import {FiHome, FiBarChart2, FiLayers, FiBox, FiPower, FiSettings} from "react-icons/fi";
import {Link, NavLink} from "react-router-dom";

import {ROUTES} from "App/constants";

import styles from "./DashboardSidebar.module.scss";

export default function DashboardSidebar(props) {
  const {isNavActive, toggleNav} = props;

  const [focused, setFocused] = useState(1);

  function mobileToggleSidebar() {
    if (window.innerWidth < 1400) {
      toggleNav();
    };
  }

  useEffect(() => {
    setFocused(isNavActive ? 1 : -1);
  }, [isNavActive]);

  return (
    <aside className={`${styles["Sidebar"]} ${isNavActive ? `${styles["Sidebar--active"]} animated` : "animated fadeOut"}`}>
      {isNavActive
        ? (
          <button onClick={toggleNav} className={`${styles["Hamburger"]} ${styles["Hamburger--active"]}`} aria-label="Close Sidebar" aria-expanded={isNavActive}>
            <span className={styles["Hamburger-bar"]}></span>
            <span className={styles["Hamburger-bar"]}></span>
            <span className={styles["Hamburger-bar"]}></span>
          </button>
        )
        : null
      }
      <div className={`${styles["Sidebar-wrapper"]} animated fadeIn`}>
        <header className={styles["Header"]}>
          <div className={styles["Header-imgWrapper"]}>
            <img className={styles["Header-avatar"]} src="/images/avatar.png" alt="User avatar" />
          </div>
          <div className={styles["Header-text"]}>
            <p className={styles["Header-username"]}>Maciej Biel</p>
            <p className={styles["Header-email"]}>maciek@example.com</p>
          </div>
        </header>
        <nav className={styles["Nav"]}>
          <ul className={styles["Nav-list"]}>
            <li>
              <NavLink
                onClick={mobileToggleSidebar}
                tabIndex={focused}
                to={ROUTES.USER.HOME}
                className={styles["Nav-el"]}
                activeClassName={styles["Nav-el--active"]}
                isActive={(match, location) => (
                  location.pathname.split("/").includes("home") ? true : false
                )}
              >
                <FiHome className={styles["Nav-elIcon"]} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={mobileToggleSidebar}
                tabIndex={focused}
                to={ROUTES.USER.STATS}
                className={styles["Nav-el"]}
                activeClassName={styles["Nav-el--active"]}
                isActive={(match, location) => (
                  location.pathname.split("/").includes("stats") ? true : false
                )}
              >
                <FiBarChart2 className={styles["Nav-elIcon"]} />
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={mobileToggleSidebar}
                tabIndex={focused}
                to={ROUTES.USER.FLOURISHES.LIST}
                className={styles["Nav-el"]}
                activeClassName={styles["Nav-el--active"]}
                isActive={(match, location) => (
                  location.pathname.split("/").includes("flourishes") ? true : false
                )}
              >
                <FiBox className={styles["Nav-elIcon"]} />
                Flourishes
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={mobileToggleSidebar}
                tabIndex={focused}
                to={ROUTES.USER.DECKS}
                className={styles["Nav-el"]}
                activeClassName={styles["Nav-el--active"]}
                isActive={(match, location) => (
                  location.pathname.split("/").includes("decks") ? true : false
                )}
              >
                <FiLayers className={styles["Nav-elIcon"]} />
                Decks
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={mobileToggleSidebar}
                tabIndex={focused}
                to={ROUTES.USER.SETTINGS}
                className={styles["Nav-el"]}
                activeClassName={styles["Nav-el--active"]}
                isActive={(match, location) => (
                  location.pathname.split("/").includes("settings") ? true : false
                )}
              >
                <FiSettings className={styles["Nav-elIcon"]} />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link tabIndex={focused} to={ROUTES.ACCOUNTS.LOGOUT} className={`${styles["Button"]}`}>
          <FiPower className={styles["Button-icon"]} />
          Logout
        </Link>
      </div>
      <footer className={styles["Footer"]}>
        <p className={styles["Footer-text"]}>&copy; 2019 CardistryStats.</p>
      </footer>
    </aside >
  );
}
