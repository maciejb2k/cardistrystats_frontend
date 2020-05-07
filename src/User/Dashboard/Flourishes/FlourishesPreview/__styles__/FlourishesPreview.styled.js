import styled from "styled-components";

export const TimelineDotClickable = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.6rem;
    color: #ffffff;
    width: 30px;
    height: 30px;
    left: -17px;
    z-index: 1;
    border-radius: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 0;
    transition: all 0.1s;
    top: -17px;
    background: ${({progress}) => progress ? progress : "#77b05e"};

    ${(props) => `
      &::before {
        content: "${props.order}";
      }

      &:hover {
        background: #e74c3c;
        cursor: pointer;
      }

      &:hover::before {
          content: "X";
          font-weight: 700;
          font-size: 1.2rem;
          font-family: inherit;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
      }
    `}
`;

export const TimelineDotStart = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.6rem;
    color: #ffffff;
    width: 30px;
    height: 30px;
    left: -17px;
    z-index: 1;
    border-radius: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border: 0;
    transition: all 0.1s;
    top: -17px;
    background: #77b05e;

    &::before {
      content: "0";
    }
`;

export const TimelineProgress = styled.span`
  color: ${({progress}) => progress ? progress : "#77b05e"};
  padding-left: 5px;
`;

const TimelineArrow = styled.span`
  position: absolute;
  left: -12px;
  border: solid #707070;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-135deg);
`;

export const TimelineArrowStart = styled(TimelineArrow)`
  bottom: -18px;
`;

export const TimelineArrowEnd = styled(TimelineArrow)`
  top: 0px;
`;

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
