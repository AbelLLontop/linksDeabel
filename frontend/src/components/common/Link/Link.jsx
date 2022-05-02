import React from 'react';

import { LinkContent } from './LinkContent';
import { motion } from 'framer-motion';
import SelecIcon from '../../ui/SocialIcons/utils/SelecIcon';
import BtnFormOpenModalSetting from '../Btns/BtnFormOpenModalSetting';


const Link = ({linkObject}) => {
  const { _id, link, title, description ,nameCategory} = linkObject;
  const   fecha="una fecha" 
  return (
    <LinkContent
      as={motion.article}
      initial={{
        opacity: 0,
      }}
      
      animate={{
        opacity: 1,
      }}
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
        <BtnFormOpenModalSetting data={{link,title,description,_id}} />

      </div>
    </LinkContent>
  );
};

export default Link;
