import React, { useEffect, useState } from 'react';
import linkService from '../../../services/LinkService';
import Header from '../../common/Header/Header';
import ListLink from '../../common/Link/ListLink';
import OptionsFilterNav from '../../common/OptionsFilterNav';

const PrincipalPage = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    linkService
      .getAllLink({
        nameCategory: '',
        orderTitle: 0,
        orderCategory: 1,
      })
      .then((d) => {
        setLinks(d);
        console.log(d);
      });
  }, []);
  return (
    <div>
      <Header />
      <OptionsFilterNav />
      <ListLink links={links} />
    </div>
  );
};

export default PrincipalPage;
