import React from 'react';
import styled from 'styled-components';

const HeaderContent = styled.header`
  color: #a3b0bb;
    padding: 16px 0;
  h1,
  h2 {
    font-size: 32px;
    font-weight: normal;
    padding: 0;
    margin: 0;
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
