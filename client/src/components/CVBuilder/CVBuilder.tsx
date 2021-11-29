import React from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelector'

import Selector from './Selector/Selector'
import Builder from './Builder/Builder'
import Modal from './Modal/Modal';

import { motion } from 'framer-motion';

export default function CVBuilder() {

  const {builder} = useTypedSelector((state) => state.showCvBuilder)
  /*
  Once you click here:
    We fetch data of user cvs (in case he click from CVs)
    At the same time we should have state for toggleModal and also know which one are we clicking

  User path:
    You click CV Builder from home, land in selector
    (we have to set as default the selector displayer)
    If you click to new cv (change displayer)

    If you click from previous we have to toggleModal('cvselector')
    when you click one cv you change displayer to builder and fetch data from selected cv
    If you click outside the modal just toggleModal()

    Inside Builder component we have 2 options to toggleModal
    1) You click the "add category btn" should trigger toggleModal('categorySelector')
    2) You click the ··· from category item, should trigger toggleModal('itemEditor') and should pass sth else
      like category id, to know which form should open...
  */


  //Display modal by switch
  // const modal = modalToggle ? <Modal/> :null

  const selectorOrBuilder: React.ReactElement = builder 
    ? <Builder/>
    : <Selector/>

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {delay: 0.1, duration: 0.1}
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <motion.div
      className="h-full relative"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}>

      {selectorOrBuilder}
      {/* {modal} */}

    </motion.div>
  );
}