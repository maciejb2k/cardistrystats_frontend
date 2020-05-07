import styled from "styled-components";

export const TableCell = styled.div`
    display: flex;
    justify-content: ${(props) => props.align};
    flex: ${(props) => props.width ? `0 0 ${props.width}` : "1 1 0"}!important;
`;

export const TableBodyCell = styled.div`
    justify-content: ${(props) => props.align};
    font-weight: ${(props) => props.bold ? "600" : "400"};
`;
