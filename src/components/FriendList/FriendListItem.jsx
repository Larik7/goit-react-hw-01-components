import PropTypes from "prop-types";
import { FriendItem } from "./FriendListItem.styled";
import { Status } from "./FriendListItem.styled";

export const FriendsItem = ({ friend: { avatar, name, id, isOnline } }) => {
    return (
        <FriendItem>
            <Status isOnline={isOnline}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendItem>
    )
};

FriendsItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
};