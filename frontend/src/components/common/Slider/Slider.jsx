import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FilterContextSet } from '../../../contexts/Filters/FilterContext';

const SliderContent = styled.nav`
  width: 200px;
  
  height: 100vh;
  background-color: #090e12;
  position: sticky;
  top: 0px;
  color: #74797c;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
      width: 180px;
  }
    @media (max-width: 580px) {
      width: 108px;
  }
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

      @media (max-width: 768px) {
        padding-left: .4rem;
  }
    @media (max-width: 580px) {
      padding-left: 0rem;
  }

      
      header {
        padding-bottom: 0.4rem;
      }
      .content {
        padding-left: 1rem;
        @media (max-width: 768px) {
        padding-left: .4rem;
  }
    @media (max-width: 580px) {
      padding-left: 0rem;
  }
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
  .radio {
    border-radius: 50% !important;
  }
  input:checked ~ span.radio:after {
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

const InputLabelRadio = ({ handle, name}) => (
  <div className="filter">
    <label>
      <input
        onChange={handle}
        type="radio"
        name="nameCategory"
        value={name}
        id=""
      />
      <span className="radio"></span>
      {name}
    </label>
  </div>
);
const InputLabelCheckbox = ({ handleChange, name }) => (
  <div className="filter">
  <label>
    <input onChange={handleChange} type="checkbox" name="" id="" />
    <span></span>
    {name}
  </label>
</div>
);

const Slider = () => {
  const { setFilter } = useContext(FilterContextSet);

  const handleRadio= (e) => {
    setFilter((filter) => ({
      ...filter,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRadioTodos= (e) => {
    setFilter((filter) => ({
      ...filter,
      nameCategory: '',
    }));
  };
  const handleCheckboxCategory= (e) => {
    const value = e.target.checked?1:0;
     setFilter((filter) => ({
       ...filter,
       orderCategory: value,
     }));
  };

  return (
    <SliderContent>
      <div className="filters">
        <header>Filters</header>
        <div className="subtitle">
          <header>Network</header>
          <div className="content">
            <InputLabelRadio handle={handleRadio} name="Linkedin" />
            <InputLabelRadio handle={handleRadio} name="Twitter" />
            <InputLabelRadio handle={handleRadio} name="Youtube" />
            <InputLabelRadio handle={handleRadio} name="Facebook" />
            <InputLabelRadio handle={handleRadio} name="Discord" />
            <InputLabelRadio handle={handleRadio} name="Figma" />
            <InputLabelRadio handle={handleRadio} name="Instagram" />
            <InputLabelRadio handle={handleRadio} name="Medium" />
            <InputLabelRadio handle={handleRadio} name="Pinteres" />
            <InputLabelRadio handle={handleRadio} name="Tiktok" />
            <InputLabelRadio handle={handleRadio} name="Twitch" />
            <InputLabelRadio handle={handleRadio} name="Whatsapp" />
            <InputLabelRadio handle={handleRadioTodos} name="Todos"/>
          </div>
        </div>
      </div>
      <div className="filters">
        <header>Orde of</header>
        <div className="subtitle">
          <header>Network</header>
          <div className="content">
            <InputLabelCheckbox handleChange={handleCheckboxCategory} name="Category" />
          </div>
        </div>
      </div>
    </SliderContent>
  );
};

export default Slider;
