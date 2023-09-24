import { Conversation, Friend } from "../../types";
import ChatConversation from "../ChatConversation/ChatConversation";
import ChatInput from "../ChatInput/ChatInput";
import "./ChatWindow.css";

interface ChatWindowProps {
  readonly friend: Friend;
  readonly conversation?: ReadonlyArray<Conversation>;
  readonly onNewMessage: (email: string, message: Conversation) => void;
}

const chatHeaderText = "Chat with ";

function ChatWindow({ conversation, friend, onNewMessage }: ChatWindowProps) {
  const onChatSend = (message: string) => {
    //send friend email and conversation object to update conversation
    onNewMessage(friend.email, { message, timestamp: Date.now() });
  };
  return (
    <>
      <div className="chat-header">
        <h3>{chatHeaderText + friend.name}</h3>
      </div>
      {conversation && (
        <ChatConversation
          friendName={friend.name}
          conversation={conversation}
        />
      )}
      <ChatInput onSendClick={onChatSend} />
    </>
  );
}

export default ChatWindow;
