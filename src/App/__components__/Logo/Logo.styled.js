import styled from "styled-components";

export const SiteLogo = styled.h1`
    color: ${(props) => props.sidecolor};
    font-size: ${(props) => props.sidefontsize};
`;

export const SiteLogoColoured = styled.span`
    color: ${(props) => props.maincolor ? props.maincolor : "#77b05e"};
    font-size: ${(props) => props.mainfontsize};
`;

export const SiteLogoText = styled.span`
    font-weight: 300;
    color: ${(props) => props.textcolor};
    font-size: ${(props) => props.textfontsize};
`;
