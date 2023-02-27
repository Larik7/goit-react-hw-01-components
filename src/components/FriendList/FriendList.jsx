import PropTypes from "prop-types";
import { FriendsItem } from "./FriendListItem";
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(friend => (
                <FriendsItem key={friend.id} friend={friend}/>
            ))}
        </FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape)
}