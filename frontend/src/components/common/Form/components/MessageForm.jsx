import { MessageFormContent } from "./MessageFormContent";


export const MessageForm = ({ title, text, options }) => (
    <MessageFormContent options={options}>
      {title}
      {text !== '' && <span className="message">{text}</span>}
    </MessageFormContent>
  );
  