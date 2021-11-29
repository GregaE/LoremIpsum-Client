import React from 'react';
import CVItem from './CVItem/CVItem';

import { motion } from 'framer-motion';

export default function MyCVs() {

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

  /*
  We should fetch CVs from user from here
  At the same time we could let option to remove them... for "nice to have"
  */

  function renderCVs() {
    return Array(5).fill(<CVItem />)
  }

  return (
    <motion.div
      className="h-full flex flex-wrap items-center gap-10 p-5 overflow-scroll"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}>
      {renderCVs()}
    </motion.div>
  );
}