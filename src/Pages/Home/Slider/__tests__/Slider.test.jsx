import React from "react";
import ReactDOM from "react-dom";
import Slider from "Pages/Home/Slider/";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Slider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
