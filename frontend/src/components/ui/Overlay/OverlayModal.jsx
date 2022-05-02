import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

import { OverlayModalContent } from './Oberlay.style'

const variantOverlay = {
    initial:{
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

const variantModalTop = {
    initial:{
        y: -100,
        opacity: 0,
        justifySelf: "center",
        alignSelf: "flex-start",
    }, 
    show: {
        y: 0,
        marginTop: "51px",
        opacity: 1,
    },
    hidden: {
        y: -100,
        opacity: 0,
    },
};



const OverlayModal = ({children,visible,variant=''}) => {
  
    return (
        <AnimatePresence>
        {
            visible &&  (
                <OverlayModalContent
                as={motion.div}
                initial="initial"
                animate="show"
                variants={variantOverlay}
                exit="hidden"
                >
                    <motion.div
                     variants={variantModalTop}
                     onClick={(e) => e.stopPropagation()}
                    >
                    {children}

                    </motion.div>
                </OverlayModalContent>
            )
        }
        </AnimatePresence>
   
  )
}

export default OverlayModal