import styled from "styled-components";

export const OverlayModalContent = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background-color: #00000070;
left: 0;
top: 0;
display: grid;
z-index: 99;
overflow-y: auto;
backdrop-filter: blur(1px);
`;
