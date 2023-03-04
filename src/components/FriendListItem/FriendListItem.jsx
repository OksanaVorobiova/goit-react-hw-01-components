import PropTypes from 'prop-types';
import { FriendListItemStyled } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline }) => {

    return (
        <FriendListItemStyled>
            <span></span>
            <img src={avatar} alt="User avatar" />
            <p>{name}</p>
        </FriendListItemStyled>
    )
}