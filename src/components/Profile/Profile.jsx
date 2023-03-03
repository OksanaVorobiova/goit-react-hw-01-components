import PropTypes from 'prop-types'; 


export const Profile = ({userData}) => {

    return (
        <div>
  <div>
    <img
      src={userData.avatar}
      alt="User avatar"
    
    />
    <p className="name">{userData.username}</p>
    <p className="tag">{userData.tag}</p>
    <p className="location">{userData.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{userData.stats.followers}</span>
    </li>
    <li>
      <span className="label">{userData.stats.views}</span>
      <span className="quantity"></span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{userData.stats.likes}</span>
    </li>
  </ul>
</div>
    );
}


Profile.propTypes = {
    userData: PropTypes.object,
}