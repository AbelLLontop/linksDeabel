import React from 'react'
import styled from 'styled-components'

const BorderDinamicLinkContent = styled.div`
max-width: 826px;
  padding: 2rem 0;
  border-top: solid 1px #74797C;
 
  position: relative;
  .title{
    position: absolute;
    color: #74797C;
    font-size:.8rem;
    left: 0;
    top: -10px;
    background-color: #14222c;
    padding-right: 1.4rem;
  }

`;

const SubBorderDinamicLinkContent = styled.div`
    border-left: solid 1px #74797C;
    display: grid;
  grid-template-columns: 287px 287px;
  grid-gap: 20px;
  padding: 1rem;
  position: relative;
  .date{
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    top: -9px;
    color: #74797C;
    padding-left: 15px;
    font-size: .8rem;
  }
  .date::before{
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    display: block;
    border-radius: 50%;
    background-color: #74797C;
    left: -7px;
  }

`

export const SubBorderDinamicLink = ({children,title}) => {
    return (
          <SubBorderDinamicLinkContent>
              <div className="date">{title}</div>
              {children}
          </SubBorderDinamicLinkContent>
    )
  }
  



const BorderDinamicLink = ({children,title}) => {
  return (
    <BorderDinamicLinkContent>
        <div className='title'>{title}</div>
            {children}
    </BorderDinamicLinkContent>
  )
}

export default BorderDinamicLink;