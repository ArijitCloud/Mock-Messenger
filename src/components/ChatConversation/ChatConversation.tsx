import { Conversation } from "../../types";
import "./ChatConversation.css";

interface ChatConversationProps {
  readonly friendName: string;
  readonly conversation: ReadonlyArray<Conversation>;
}
function ChatConversation({ conversation }: ChatConversationProps) {
  return (
    <div className="chat-messages">
      {conversation &&
        conversation.map((c, index) => {
          return (
            <div key={c.timestamp + index} className="message-item">
              <div className="chat-user">{`Me : `}</div>
              <div className="chat-message">{c?.message}</div>              
            </div>
          );
        })}
    </div>
  );
}

export default ChatConversation;
