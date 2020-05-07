import styled from "styled-components";

export const SliderBackground = styled.div`
    background: url("/images/${(props) => props.image}") no-repeat center center;
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: ${(props) => props.index === props.activeindex ? "1" : "0"};
    transition: opacity .3s ease-in-out;
`;
