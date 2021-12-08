import React from 'react';
import { useTypedSelector } from '../../utils/useTypeSelector'

import Selector from './Selector/Selector'
import Builder from './Builder/Builder'
import Modal from './Modal/Modal';

import { motion } from 'framer-motion';

export default function CVBuilder() {

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
      className='w-full h-9/10 max-w-full h-main max-h-full relative bg-primary-bg rounded-tl-corner pt-2'
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={containerVariants}>

      {selectorOrBuilder}
      {modal}

    </motion.div>
  );
}