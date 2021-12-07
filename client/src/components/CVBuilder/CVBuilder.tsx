import React from 'react';
import { connect } from 'react-redux'
import { useTypedSelector } from '../../utils/useTypeSelector'

import Selector from './Selector/Selector'
import Builder from './Builder/Builder'
import Modal from './Modal/Modal';

import { motion } from 'framer-motion';

function CVBuilder({pdfStatus}:any) {

  const { builder } = useTypedSelector((state) => state.showCvBuilder)
  const { flag } = useTypedSelector((state) => state.toggleModal)
  
  //Display modal by switch
  const modal = flag ? <Modal/> : null

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
      {modal}

    </motion.div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfStatus: state.pdf,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVBuilder);