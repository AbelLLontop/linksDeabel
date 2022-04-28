import React from 'react'
import styled from 'styled-components'
const HeaderContent = styled.header`
    color:#A3B0BB;
    h1,h2{
        font-size: 32px;
        font-weight: normal;
        padding: 0;
        margin: 0;
    }
`;
const Header = () => {
  return (
    <div>
        <HeaderContent>
        <h1>My Links</h1>
        <h2>Links of Frontend</h2>
        </HeaderContent>
        <div className="options">
            <div className='input-search'>
            <input type="text" name="" id="" />
            </div>
            <div className="button-add">
                new Link
            </div>
        </div>
    </div>
  )
}

export default Header