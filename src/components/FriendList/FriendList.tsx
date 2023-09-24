import { Friend } from "../../types";
import "./FriendList.css";


interface FriendListProps {
  readonly friends: ReadonlyArray<Friend>;
  readonly onLoadFriendChat: (friend: Friend) => void;
}

function FriendList({ friends, onLoadFriendChat }: FriendListProps) {
  const onSelectFriend = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    // Remove active class from all friends and add it to the selected friend
    document
      .querySelectorAll(".friend-list-item a")
      .forEach((li) => li.classList.remove("active"));
    target.classList.add("active");

    // Load the conversation for the selected friend
    const selectedFriend = friends.find((f) => f.name === target.textContent);
    selectedFriend && onLoadFriendChat(selectedFriend);
  };

  return (
    <>
      <ul className="friend-list">
        {friends.map((friend) => {
          return (
            <li
              className="friend-list-item"
              key={friend.email}
              onClick={(e) => onSelectFriend(e)}
            >
              <a href="#">{friend.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FriendList;
