import React from "react";
import {SiteLogo, SiteLogoColoured, SiteLogoText} from "./Logo.styled";

function Logo(props) {
  return (
    <SiteLogo sidecolor={props.sidecolor} sidefontsize={props.sidefontsize}>
            cardistry
      <SiteLogoColoured maincolor={props.maincolor} mainfontsize={props.mainfontsize}>Stats.</SiteLogoColoured>
      <SiteLogoText textcolor={props.textcolor} textfontsize={props.textfontsize}>{props.children}</SiteLogoText>
    </SiteLogo>
  );
}

export default Logo;
