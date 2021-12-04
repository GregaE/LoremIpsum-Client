import React from 'react';
import CVItem from './CVItem/CVItem';
import { connect } from 'react-redux'

import { motion } from 'framer-motion';

function MyCVs({curriculum}:any) {

  const {cvs} = curriculum;

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

  /*
  In the meantime it just shows as many items as cvs we have in the list, but should be just
  a picture / thumbnail of the cv item
  */

  function renderCVs() {
    if(cvs.length > 0) {
      return cvs.map((cv:any) => {
        return <CVItem key={cv.id} cvId={cv.id} date_created={cv.date_created} data={cv.saved_cv}/>
      })
    }
    return <p>You dont have any CV yet</p>
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

const mapStateToProps = (state: any) => {
  return {
    curriculum: state.cvs
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCVs);