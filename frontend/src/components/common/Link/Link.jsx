import React from 'react';
import styled from 'styled-components';

const LinkContent = styled.article`
  background-color: #1a2531;
  border-left: solid 6px #126AC9;
  border-radius: 5px;
  padding: 14px;
  header{
      color:#AEBCC7;
      span{
          color:#74797C;
      }
  }
  .link{
      a{
          color:#1258A2;
          text-decoration: none;
      }
  }
  .description{
      color:rgb(90, 101, 113);
      p{
          margin: 0;
      }
  }
  .options{
      color:#7C7C7C;
      display: flex;
      justify-content: space-between;
  }
`;

const Link = () => {
  return (
    <LinkContent>
      <header>
        <div>Una pagina desconocia</div>
        <span>Acualizado hace 20 minutos</span>
      </header>
      <div className="link">
        <a href="#">https://todoist.com/es</a>
      </div>
      <div className='description'>
        <p>Esta es una pequeña descripción que puede ser mucho mas grande xd</p>
      </div>
      <div className="options">
          <div className="iconOut"> <i className="icon-link"></i></div>
          <div className="iconConfig">  <i className="icon-setting"></i></div>
      </div>
    </LinkContent>
  );
};

export default Link;
