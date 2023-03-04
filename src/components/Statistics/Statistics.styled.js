import styled from "styled-components";
import { getRandomHexColor } from "components/utils/getRandomColor";

export const StatsSection = styled.section`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #738087;
    margin-top: 10px;

    ul {
        padding: 10px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

    }
`;

export const DataEl = styled.li`
    background-color: ${getRandomHexColor};
    min-height: 50%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    color: #313131;
    gap: 8px;
`;