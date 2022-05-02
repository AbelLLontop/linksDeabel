import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../../../contexts/Filters/FilterContext';
import linkService from '../../../services/LinkService';
import Header from '../../common/Header/Header';
import ListLink from '../../common/Link/ListLink';
import OptionsFilterNav from '../../common/OptionsFilterNav';

const PrincipalPage = () => {
  const [links, setLinks] = useState([]);
  const {filter} = useContext(FilterContext);
 

  useEffect(() => {

    linkService
      .getAllLink(filter)
      .then((d) => {
        setLinks(d);
      });
  }, [filter]);
  return (
    <div>
       <OptionsFilterNav />
      <Header />
     
      <ListLink links={links} />
    </div>
  );
};

export default PrincipalPage;
