import styled from "styled-components";

export const SpinnerLoader = styled.div`
    display: inline-block;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    &::after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid ${(props) => props.color};
        border-color: ${(props) => props.color} transparent #fff transparent;
        animation: lds-dual-ring ${(props) => props.duration ? props.duration : 1}s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
