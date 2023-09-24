import React from "react";
import "./App.css";
import ChatWindow, { Conversation } from "./components/ChatWindow/ChatWindow";
import FriendList, { Friend } from "./components/FriendList/FriendList";
import { FriendsData } from "./mocks/FriendsData";

type ConversationMap = {
  email: string;
  conversation: Array<Conversation>;
};

const loadAllConversation = () => {
  return FriendsData.map((friend) => {
    return {
      email: friend.email,
      conversation: [],
    };
  });
};

function App() {
  const [allConversation, setAllConversation] =
    React.useState<Array<ConversationMap>>(loadAllConversation);
  const [currentConversation, setCurrentConversation] =
    React.useState<Array<Conversation>>();
  const [currentFriend, setCurrentFriend] = React.useState<Friend>();

  const loadFriendChat = (friend: Friend) => {
    const currentFriendConversation = allConversation.find(
      (c) => c.email === friend.email
    );
    setCurrentFriend(friend);
    setCurrentConversation(currentFriendConversation?.conversation);
  };

  const onNewMessage = (email: string, message: Conversation) => {
    setAllConversation((prev) => {
      return prev.map((conversationMap) => {
        if (conversationMap.email === email) {
          return {
            email: conversationMap.email,
            conversation: [...conversationMap.conversation, message],
          };
        } else {
          return conversationMap;
        }
      });
    });

    setCurrentConversation((prev) => {
      return prev ? [...prev, message] : [message];
    });
  };
  return (
    <div className="mock-messenger">
      <div className="friend-list-panel">
        <FriendList friends={FriendsData} onLoadFriendChat={loadFriendChat} />
      </div>
      <div className="chat-panel">
        {currentFriend && (
          <ChatWindow
            conversation={currentConversation}
            friend={currentFriend}
            onNewMessage={onNewMessage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
