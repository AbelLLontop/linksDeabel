import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContent = styled.nav`
  width: 200px;
  height: 100vh;
  background-color: #14222c;
  position: sticky;
  top: 0px;
  color: #74797c;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  box-sizing: border-box;
  .filters {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #646b6f;
    & > header {
      padding-bottom: 0.4rem;
      color: #8d9499;
      font-size: 12px;
    }
    .subtitle {
      font-size: 0.8rem;
      padding-left: 2rem;
      header {
        padding-bottom: 0.4rem;
      }
      .content {
        padding-left: 1rem;
      }
    }
    .filter {
      label {
        display: flex;
        cursor: pointer;
        align-items: center;
        padding: 0.1rem 0;
      }
      label:hover {
        color: #8d9499;
      }
    }
    input {
      width: 0;
      height: 0;
      position: absolute;
      opacity: 0;
    }
    input ~ span {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background-color: #243241;
      position: relative;
      margin-right: 0.4rem;
      &:after {
        content: '';
        width: 6px;
        height: 11px;
        box-sizing: border-box;
        border-bottom: solid 2px white;
        border-right: solid 2px white;
        transform: rotate(45deg);
        position: absolute;
        left: 7px;
        top: 3px;
        display: none;
      }
    }
    input:checked ~ span::after {
      display: block;
    }
    input:checked ~ span {
      background-color: #2489f6;
    }
  }
  .radio{
    border-radius: 50% !important;
  }
  input:checked ~ span.radio:after{
        content: '';
        width: 11px;
        height: 11px;
        box-sizing: border-box;
        background-color: white;
        position: absolute;
        border-radius: 50%;
        left: 5px;

        top: 5px;
        display: block;
  }
`;

const Slider = () => {
  const handleCheckbox = (e)=>{
    console.log("checkbox");

    console.log({
    [e.target.name]: e.target.value
    })

  }
  return (
    <SliderContent>
      <div className="filters">
        <header>Filters</header>
        <div className="subtitle">
          <header>Network</header>
          <div className="content">
            <div className="filter">
              <label>
                <input type="checkbox" name="" id="" />
                <span></span>
                Facebook
              </label>
            </div>
            <div className="filter">
              <label>
                <input type="checkbox" name="" id="" />
                <span></span>
                Youtube
              </label>
            </div>
            <div className="filter">
              <label>
                <input type="checkbox" name="" id="" />
                <span></span>
                Otros
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filters">
        <header>Orde of</header>
        <div className="subtitle">
          <header>Network</header>
          <div className="content">
            <div className="filter">
              <label>
                <input onChange={handleCheckbox} type="radio" name="nameCategory" value="facebook" id="" />
                <span className='radio'></span>
                facebook
              </label>
            </div>
            <div className="filter">
              <label>
                <input type="radio"  onChange={handleCheckbox} name="nameCategory" value="twitter"  id="" />
                <span className='radio'></span>
                twitter
              </label>
            </div>
            <div className="filter">
              <label>
                <input type="radio"  onChange={handleCheckbox} name="nameCategory" value="otros" id="" />
                <span className='radio'></span>
                otros
              </label>
            </div>
          </div>
        </div>
      </div>
    </SliderContent>
  );
};

export default Slider;
