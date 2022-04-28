import React from 'react'
import styled from 'styled-components'

const SliderContent = styled.nav`
    width: 200px;
    height: 100vh;
    background-color: #14222c;
    position: sticky;
    top: 0px;
`;

const Slider = () => {
  return (
    <SliderContent>Slider</SliderContent>
  )
}

export default Slider