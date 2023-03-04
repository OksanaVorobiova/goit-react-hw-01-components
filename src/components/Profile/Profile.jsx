import PropTypes from 'prop-types'; 
import { Background, Username, UserData, Stats, Label, Quantity} from './Profile.styled';


export const Profile = ({username, tag, location, avatar, stats}) => {

    return (
        <Background>
          <div className="main">
            <img
              src={avatar}
              alt="User avatar"
            />
            <Username>{username}</Username>
            <UserData>{tag}</UserData>
            <UserData>{location}</UserData>
          </div>

  <Stats>
    <li>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </li>
    <li>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </li>
    <li>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </li>
  </Stats>
</Background>
    );
}


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
}