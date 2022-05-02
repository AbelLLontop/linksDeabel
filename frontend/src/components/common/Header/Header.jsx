import React from 'react';
import styled from 'styled-components';

const HeaderContent = styled.header`
    color: #d3d2d2;
    padding: 20px 0;
    margin-bottom: 30px;
    border-left: solid 1px #acadae;
    padding-left: 16px;
    padding-top: 28px;
  h1,
  h2 {
    font-size: 32px;
    font-weight: normal;
    padding: 0;
    margin: 0;
    @media (max-width: 400px) {
      font-size:26px;
  }
  }
  
`;

const Header = () => {
  return (
    <HeaderContent>
      <h1><i className="icon-link"></i> My Links</h1>
      <h2>Links of Frontend</h2>
    </HeaderContent>
  );
};

export default Header;
