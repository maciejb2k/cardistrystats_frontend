import React, {Fragment, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ROUTES} from "App/constants";
import {dashRouteByRole} from "App/__helpers__/user";

import "Pages/Home/Header/Header.scss";

function HomeHeader() {
  const [navActive, setNavActive] = useState(false);
  const [hamburgerActive, sethamburgerActive] = useState(false);
  const isAuthenticated = useSelector((state) => state.accounts.isAuthenticated);

  function toggleNavbar() {
    navActive && hamburgerActive
      ? setTimeout(() => sethamburgerActive(!navActive), 400)
      : sethamburgerActive(!navActive);

    setNavActive(!navActive);
  };

  return (
    <header className="Navbar">
      <div className="Navbar-wrapper container">
        <div className="Navbar-brand">
          <h1 className="Navbar-brandName">
            <Link to={ROUTES.HOME}>cardistry<span className="Navbar-brandName--coloured">Stats.</span></Link>
          </h1>
        </div>
        <nav className="Navbar-nav">
          <ul className="Navbar-navList">
            <li className="Navbar-navEl Navbar-navEl--active">Home</li>
            <li className="Navbar-navEl">Flourishes</li>
            <li className="Navbar-navEl">Decks</li>
            <li className="Navbar-navEl">About</li>
          </ul>
        </nav>
        <div className="Navbar-links">
          {isAuthenticated
            ? (
              <Fragment>
                <Link to={ROUTES.ACCOUNTS.LOGOUT} className="Navbar-navLink Navbar-navLink--main">Logout</Link>
                <Link to={dashRouteByRole()} className="Navbar-navLink Navbar-navLink--dash">Panel</Link>
              </Fragment>
            )
            : (
              <Fragment>
                <Link to={ROUTES.ACCOUNTS.REGISTER} className="Navbar-navLink Navbar-navLink--secondary">Register</Link>
                <Link to={ROUTES.ACCOUNTS.SIGN_IN} className="Navbar-navLink Navbar-navLink--main">Sign In</Link>
              </Fragment>
            )
          }

        </div>
        <button onClick={toggleNavbar} className={`Hamburger ${hamburgerActive ? "Hamburger--active" : ""}`} aria-label="Toggle Navigation" aria-expanded="false">
          <span className="Hamburger-bar"></span>
          <span className="Hamburger-bar"></span>
          <span className="Hamburger-bar"></span>
        </button>
      </div>
      <div className={`MobileNav ${navActive ? "MobileNav--expanded" : ""}`}>
        <nav className="MobileNav-nav">
          <ul className="MobileNav-navList">
            <li className="MobileNav-navEl MobileNav-navEl--active">Home</li>
            <li className="MobileNav-navEl">About</li>
            <li className="MobileNav-navEl">Tracking</li>
            <li className="MobileNav-navEl">Contact</li>
            <li className="MobileNav-navEl">
              <Link to={ROUTES.ACCOUNTS.SIGN_IN} className="MobileNav-navLink">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HomeHeader;
