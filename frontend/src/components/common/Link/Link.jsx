import React from 'react';

import { LinkContent } from './LinkContent';
import { motion } from 'framer-motion';
import SelecIcon from '../../ui/SocialIcons/utils/SelecIcon';


const Link = ({ title, fecha, link, description ,nameCategory}) => {
  return (
    <LinkContent
      as={motion.article}
      initial={{
        opacity: 0,
      }}
      
      animate={{
        opacity: 1,
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      

      layout
    >
      <div  className='content-header'>
      <header>
        <div>{title}</div>
        <span>{fecha}</span>
      </header>
      <div className="icon-page">
        <SelecIcon nameIcon={nameCategory}/>
      </div>
      </div>
      <div className="link">
        <a target={'_blank'} href={link}>
          {link}
        </a>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="options"> 
        <div className="iconOut">
          <i className="icon-link"></i>
        </div>
        <div className="iconConfig">
          <i className="icon-setting"></i>
        </div>
      </div>
    </LinkContent>
  );
};

export default Link;
