import styled from "styled-components";
import { getRandomHexColor } from "utils/getRandomColor";

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
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        max-width: 70%;

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

    @media (max-width: 540px) {
        padding: 7px;
        font-size: 12px;
        font-weight: 500;
    }
`;