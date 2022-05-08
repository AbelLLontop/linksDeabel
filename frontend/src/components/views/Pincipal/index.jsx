import Header from '@/components/common/Header/Header';
import ListLink from '@/components/common/Link/ListLink';
import OptionsFilterNav from '@/components/common/OptionsFilterNav';
import { FilterContext } from '@/contexts/Filters/FilterContext';
import linkService from '@/services/LinkService';
import React, { useContext, useEffect, useState } from 'react';


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
