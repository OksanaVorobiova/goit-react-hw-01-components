import styled from "styled-components";
import { isOnlineSpanColor } from "utils/isOnlineSpanColor";


export const FriendListItemStyled = styled.li`
    width: 100%;
    border-radius: 8px;
    border: 1px solid gray;
    padding: 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    img {
        width: 20%;
        padding: 8px;
    }

    span {
        background-color: ${isOnlineSpanColor};
        width: 10px;
        height: 10px;
        border-radius: 50%;

    }
`;