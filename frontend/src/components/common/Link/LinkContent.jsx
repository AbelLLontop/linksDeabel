import styled from 'styled-components';

export const LinkContent = styled.article`
  background-color: #1a2531;
  border-left: solid 6px #126AC9;
  border-radius: 5px;
  padding:8px 14px;
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
      }
  }
  .description{
    font-size: .8rem;
      color:rgb(90, 101, 113);
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
`;
