import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListWrapper } from './FriendListStyles';

const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
