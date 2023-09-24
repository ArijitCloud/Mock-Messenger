import React from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import FriendList from "./components/FriendList/FriendList";
import { FriendsData } from "./mocks/FriendsData";
import { Conversation, ConversationMap, Friend } from "./types";

/**
 * Load initial conversation based on mock friend list
 */
const loadInitialConversation = () => {
  return FriendsData.map((friend) => {
    return {
      email: friend.email,
      conversation: [],
    };
  });
};

function App() {
  const [allConversation, setAllConversation] =
    React.useState<Array<ConversationMap>>(loadInitialConversation);
  const [currentConversation, setCurrentConversation] =
    React.useState<Array<Conversation>>();
  const [currentFriend, setCurrentFriend] = React.useState<Friend>();

  /**
   * Load conversation for a selected friend   
   */
  const loadFriendChat = (friend: Friend) => {
    const currentFriendConversation = allConversation.find(
      (c) => c.email === friend.email
    );
    setCurrentFriend(friend);
    setCurrentConversation(currentFriendConversation?.conversation);
  };

   /**
   * Update conversation for a new message   
   */
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
        {currentFriend ? (
          <ChatWindow
            conversation={currentConversation}
            friend={currentFriend}
            onNewMessage={onNewMessage}
          />
        ) : (
          <div>Select a friend to start chat</div>
        )}
      </div>
    </div>
  );
}

export default App;
