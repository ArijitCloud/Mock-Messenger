import ChatInput from "../ChatInput/ChatInput";
import { Friend } from "../FriendList/FriendList";

export type Conversation = {
  message: string;
  timestamp: number;
};

interface ChatWindowProps {
  readonly friend: Friend;
  readonly conversation?: ReadonlyArray<Conversation>;
  readonly onNewMessage: (email: string, message: Conversation) => void;
}

const chatHeaderText = "Chat with ";

function ChatWindow({ conversation, friend, onNewMessage }: ChatWindowProps) {
  const onChatSend = (message: string) => {
    onNewMessage(friend.email, { message, timestamp: Date.now() });
  };
  return (
    <>
      <div className="chat-header">
        <h3>{chatHeaderText + friend.name}</h3>
      </div>
      <div className="chat-messages">
        {conversation &&
          conversation.map((c,index) => {
            return <div key={c.timestamp+index}>{c?.message}</div>;
          })}
      </div>
      <ChatInput onSendClick={onChatSend} />
    </>
  );
}

export default ChatWindow;
