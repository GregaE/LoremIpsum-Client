import React from 'react';
import { connect } from 'react-redux'

import CVItem from '../../../MyCVs/CVItem/CVItem';

function CVSelector({curriculum}:any) {

  const {cvs} = curriculum;

  function renderCVs() {
    if(cvs.length > 0) {
      return cvs.map((cv:any) => {
        return <CVItem cvId={cv.id} date_created={cv.date_created} data={cv.saved_cv}/>
      })
    }
    return <p>You dont have any CV yet</p>
  }

  return (
    <div className="h-full flex flex-wrap items-center gap-10 p-5 overflow-scroll">
      {renderCVs()}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CVSelector);