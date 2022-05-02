import React, { useContext, useRef, useState } from 'react';
import { FilterContextSet } from '../../../../contexts/Filters/FilterContext';
import { InputSearchContent } from './style';

const InputSearch = () => {
  
  const {setFilter} = useContext(FilterContextSet);

  const refSearch = useRef('');

  const handleSearch= (e) => {
    e.preventDefault();
    const dataSearch = refSearch.current.value;

      setFilter((filter) => ({
        ...filter,
        searchName: dataSearch,
      }));

  };

  return (
    <InputSearchContent onSubmit={handleSearch}>
    <label>
    <i className="icon-search"></i>
      <input autoComplete='off' ref={refSearch} type="text" name="in" id="in" />
    </label>
     
    </InputSearchContent>
  );
};

export default InputSearch;
