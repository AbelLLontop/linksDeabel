import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import categoryService from '../../../services/CategoryService';
import linkService from '../../../services/LinkService';
import ListLink from '../../common/Link/ListLink';

const GridLinks = styled.div`
  display: grid;
  grid-template-columns: 287px 287px;
  grid-gap: 20px;
`;

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
      <GridLinks>
      <ListLink links={links} />
      </GridLinks>
  );
};

export default PrincipalPage;
