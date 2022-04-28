import React, { useEffect, useState } from 'react';
import linkService from '../../../services/LinkService';
import ListLink from '../../common/Link/ListLink';

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

      <ListLink links={links} />

  );
};

export default PrincipalPage;
