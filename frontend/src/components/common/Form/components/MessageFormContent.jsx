import styled from 'styled-components';

export const MessageFormContent = styled.div`
  color: ${(props) => props.options.message_fondo};
  .message {
    color: ${(props) => props.options.message_color};
    background-color: ${(props) => props.options.message_fondo};
    padding: 1px 10px;
    font-size: 10px;
    border-radius: 4px;
    margin-left: 8px;
  }
`;