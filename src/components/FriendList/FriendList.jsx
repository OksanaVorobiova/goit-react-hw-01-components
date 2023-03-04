import PropTypes from 'prop-types'; 
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListWrapper } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    console.log(friends);
    return (
        <FriendListWrapper>
            {friends.map(({ avatar, name, isOnline, id }) => 
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            )}
        </FriendListWrapper>
    )
}