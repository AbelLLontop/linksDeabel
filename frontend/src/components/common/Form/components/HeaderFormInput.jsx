import { MessageForm } from "./MessageForm";

export const HeaderFormInput = ({ options, name, messageText }) => (
    <header>
      {options?.message_title ? (
        <MessageForm
          options={options}
          title={options.message_title}
          text={messageText}
        />
      ) : (
        <>{name}</>
      )}
    </header>
  );