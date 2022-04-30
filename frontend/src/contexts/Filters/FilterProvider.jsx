import { useState } from 'react';
import { FilterContext, FilterContextSet } from './FilterContext';

const initialFilters = {
  nameCategory: '',
  orderTitle: 0,
  orderCategory: 1,
};

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(initialFilters);

  return (
    <FilterContextSet.Provider value={{setFilter }}>
      <FilterContext.Provider value={{ filter }}>
        {children}
      </FilterContext.Provider>
    </FilterContextSet.Provider>
  );
};
export default FilterProvider;