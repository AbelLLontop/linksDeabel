import styled from 'styled-components';

const FormContent = styled.div`
  background-color: #12161b;
  border-radius: 27px;
  border: solid 1px #12161b;
  padding: 35px 40px;
  color: #afb4b8;

  & > header {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#AFB4B8;
    gap:.4rem;
    i{
        font-size: 1.8rem;
    }
  }
  
  .logo-container {
    padding: 1rem 0;
    display:flex;
    justify-content: center;
  }
  .logo {
    width: 156px;
    height: 156px;
    border-radius: 50%;
    background-color: #1877f2;
  }
 
 
 
  .buttons{
      display: flex;
      justify-content: flex-end;
      gap:.4rem;
      padding-top: 35px;
  }
  .buttons .btn{
      border:none;
      outline: none;
    font-size: .9rem;
      padding: .6rem 1.8rem;
      border-radius: 4px;
      cursor: pointer;
  }
  .btn-cancel{
      background-color: #792727;
      color:#DADADA;
      &:hover{
            background-color: #9d2323;
      }
  }
  .btn-save{
      background-color:#2E7927 ;
      color:#DADADA;
      &:hover{
        background-color: #3a9031;
    }
  }
  .loading{
    width: 24px;
    height: 24px;
    background-color: red;
    border-radius: 50%;
    
    position: relative;
    background: linear-gradient(45deg,transparent, transparent 40%, #e5f403);
   animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .loading div{
    z-index: 99;
    color:white;
    font-size: .8rem;
  }

  .loading:before{
    content:'';
    width: 18px;
    height: 18px;
    background-color: #12161b;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    display: flex !important;
    align-items: center;
    justify-content: center;

  }

.text-animation{
  animation-name: loading-text;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
}
@keyframes loading-text {
    0% {
      opacity: 1;
    }
    50%{
      opacity: .4;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
      filter:hue-rotate(0deg)
    }
    100%{
      transform:rotate(360deg);
      filter:hue-rotate(360deg);
    }
  }
`;
export default FormContent;
