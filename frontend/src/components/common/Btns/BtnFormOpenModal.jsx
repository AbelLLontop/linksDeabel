import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

import OverlayModal from '../../ui/Overlay/OverlayModal';
import Form from '../Form/Form';


const BtnFormOpenModalContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0 1.2rem;
  border-radius: 7px;
  background: #182833;
  color: #a1a1a1;
`;
const ContentForm = styled.div`
    width: 420px;
`;

const BtnFormOpenModal = () => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  }
  return (
    <>
      <BtnFormOpenModalContainter as={motion.div} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} onClick={openModal}>
        <i className="icon-plus"></i> new Link
      </BtnFormOpenModalContainter>
      <OverlayModal visible={visible}>
        <ContentForm>
          <Form  ocultar={closeModal}/>
        </ContentForm>
      </OverlayModal>
    </>
  );
};

export default BtnFormOpenModal;
