import React, { useEffect, useState } from 'react';
import Link from './Link';
import BorderDinamicLink, {
  SubBorderDinamicLink,
} from './components/BorderDinamicLink';
import { filterListShow } from './utils/filterListShow';

const ListLink = ({ links }) => {
  const [filtersForCategory, setFiltersForCategory] = useState([]);
  useEffect(() => {
   const filterList = filterListShow(links);
    setFiltersForCategory(filterList);
  }, [links]);
  /*


*/

  return (
    <>
      {filtersForCategory?.map((filter) => (
        <BorderDinamicLink key={filter.category} title={filter.category}>
          {filter.dates?.map((linkDate) => (
            <SubBorderDinamicLink key={linkDate.date} title={linkDate.date}>
              {linkDate.links?.map((link) => (
                <Link
                  key={link._id}
                  linkObject={link}
                />
              ))}
            </SubBorderDinamicLink>
          ))}
        </BorderDinamicLink>
      ))}
    </>
  );
};

export default ListLink;
