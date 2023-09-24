import { useRef } from "react";

interface ChatInputProps {
  readonly maxRows?: number;
  readonly onSendClick: (message: string) => void;
}

function ChatInput({ maxRows, onSendClick }: ChatInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSendButtonClick = () => {
    if (textAreaRef.current) {
      onSendClick(textAreaRef.current.value);
      textAreaRef.current.value = "";
    }
  };
  return (
    <div className="chat-input-container">
      <textarea ref={textAreaRef} rows={maxRows || 4}></textarea>
      <button onClick={onSendButtonClick}>Send</button>
    </div>
  );
}

export default ChatInput;
