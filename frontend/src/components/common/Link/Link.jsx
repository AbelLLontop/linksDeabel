import React from 'react';
import { LinkContent } from './LinkContent';

const Link = ({title,fecha,link,description}) => {
  console.log("hola");
  return (
    <LinkContent>
          <header>
        <div>{title}</div>
        <span>{fecha}</span>
      </header>
      <div className="link">
        <a href="#">{link}</a>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className="options">
          <div className="iconOut"> <i className="icon-link"></i></div>
          <div className="iconConfig">  <i className="icon-setting"></i></div>
      </div>
    </LinkContent>
  );
};

export default Link;
