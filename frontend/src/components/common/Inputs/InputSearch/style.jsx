import styled from 'styled-components';
export const InputSearchContent = styled.form`
label{
  background-color: #1a2531;
     background-color: #1a2531;
    color: #126ac9;
  
    border: solid 1px #090e12;
    &:focus-within{
      border: solid 1px #14406f;
    }
    display: flex;
    width: 376px;
    border-radius: 7px;
    padding: 9px 15px;
    align-items: center;
    cursor: text;
  
}
    
  input {
    border: none;
    flex-grow: 1;
    outline: none;
    background: none;
    color: #bfbfbf;
    font-size: 0.8rem;
    padding-left: 8px;
    caret-color: #2489f6;
  }
`;