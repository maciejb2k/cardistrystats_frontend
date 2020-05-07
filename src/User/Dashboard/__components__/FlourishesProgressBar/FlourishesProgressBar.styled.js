import styled from "styled-components";

export const ProgressBar = styled.div`
  display: flex;
  flex: 1 1 0;
  position: relative;
  padding-bottom: 60px;
`;

export const ProgressFragment = styled.div`
  width: 100%;
  height: 5px;
  background: ${({bgFrom, bgTo}) => bgFrom && bgTo
    ? `linear-gradient(to right, ${bgFrom}, ${bgTo})`
    : "#dddddd"};
  position: relative;
`;

export const ProgressIndicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  position: absolute;
  top: -5px;
  ${({toLeft}) => toLeft ? `
    left: 0px;
  ` : `
    right: -10px;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: ${({bg}) => bg ? bg : "#dddddd"};

  & > span {
    color: red;
    position: absolute;
    background: #404040;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 7px;
    display: none;
    bottom: 25px;
  }

  & > span::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #404040;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%)
  }

  &:hover > span {
    display: block;
  }
`;

export const ProgressState = styled.span`
  color: ${({active}) => active ? "#404040" : "#717171"};
  position: absolute;
  top: 15px;
  ${({toLeft}) => toLeft ? `
    left: 0px;
  ` : `
    right: -20px;
  `}
`;
