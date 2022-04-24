import styled from 'styled-components';

export const InputFormContent = styled.label`
color: #73797c;
font-size: 0.8rem;
margin-bottom: 4px;
display: block;

animation-name: ${(props) => (props.active ? 'input-animation' : '')};
animation-duration: 0.4s;

input {
  padding: 10px 11px;
  border-radius: 4px;
  color: ${(props) => props.options.input_color};
  border: none;
  outline: none;
  background-color: #14222c;
  width: 100%;
  box-sizing: border-box;
  border: solid 1px ${(props) => props.options.input_border};
  &:focus {
    border: solid 1px ${(props) => props.options.input_border_focus};
  }
  caret-color: ${(props) => props.options.input_caret_color};
  position: relative;
}
@keyframes input-animation {
  0% {
    -webkit-transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    -webkit-transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    -webkit-transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    -webkit-transform: translate(0px, 2px) rotate(0deg);
  }
  40% {
    -webkit-transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    -webkit-transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    -webkit-transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    -webkit-transform: translate(2px, 1px) rotate(-1deg);
  }
  80% {
    -webkit-transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    -webkit-transform: translate(2px, 2px) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(1px, -2px) rotate(-1deg);
  }
}

header {
  color: ${(props) => props.options.header_color};
  padding-bottom: 3px;
}
`;