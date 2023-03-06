import PropTypes from 'prop-types';
import { FriendListItemStyled } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyled isOnline={isOnline}>
      <span></span>
      <img src={avatar} alt="User avatar" />
      <p>{name}</p>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
