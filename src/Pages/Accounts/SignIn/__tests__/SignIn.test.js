import React from "react";
import {shallow} from "enzyme";
import SignIn from "Pages/Account/SignIn";

describe("SignIn Component", () => {
  it("should render properly", () => {
    const wrapper = shallow(<SignIn />);
  });
});
