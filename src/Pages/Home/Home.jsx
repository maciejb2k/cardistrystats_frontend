import React from "react";
import {useSelector} from "react-redux";
import "Pages/Home/Home.scss";

import HomeSlider from "Pages/Home/Slider";

function Home() {
  const isAuthenticated = useSelector((state) => state.accounts.isAuthenticated);

  return (
    <div className="LandingPage">
      <HomeSlider isAuth={isAuthenticated}></HomeSlider>
    </div>
  );
}

export default Home;
