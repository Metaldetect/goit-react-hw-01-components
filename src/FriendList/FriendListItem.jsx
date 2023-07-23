import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListStyles';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Friend key={id}>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
