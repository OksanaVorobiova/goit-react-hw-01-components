import styled from "styled-components";

export const Table = styled.table`
    width: 50vw;
    border: 1px solid gray;
    margin: 0 auto;
    margin-top: 10px;

    thead {
        border-bottom: 1px solid gray;
        background-color: #24eae1;

        tr > th {
            padding: 10px;
        }
    }
`;