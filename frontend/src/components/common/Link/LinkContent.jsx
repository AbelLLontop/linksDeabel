import styled from 'styled-components';

export const LinkContent = styled.article`
  background-color: #0d1318;
  border-left: solid 6px #126AC9;
  border-radius: 5px;
  padding:8px 14px;
  cursor: pointer;
  &:hover{
  background-color: #0c1823;  
  }
  header{
      color:#AEBCC7;
      font-size:.8rem;
      span{
          color:#74797C;
          font-size: .7rem;
      }
  }
  .link{
    padding: 4px 0;
    font-size: .7rem;
    
      a{
        
          color:#1258A2;
          text-decoration: none;
          word-wrap: break-word;
          &:hover{
              text-decoration: underline;
            }
        }
  }
  .description{
    font-size: .8rem;
      color:#a3a3a3;
      p{
          margin: 0;
      }
  }
  .options{
      color:#7C7C7C;
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
  }
  .content-header{
    display: flex;
    justify-content: space-between;
    i{
      font-size: 30px !important;
    }
  }
`;
