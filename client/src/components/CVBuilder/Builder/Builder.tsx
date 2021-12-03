import React from 'react';
import { connect } from 'react-redux'

import PersonalData from './PersonalData/PersonalData';
import Categories from './Categories/Categories';
import Preview from './Preview/Preview';
import BuilderSettings from './BuilderSettings/BuilderSettings';

import { AnimatePresence } from 'framer-motion';

//TODO types for toggle
function Builder({toggle}: any) {


  return (
    <div className="h-full flex flex-wrap overflow-scroll">
      <div className="w-2/6 pl-10 overflow-hiden text-center">
        <PersonalData/>
        <Categories />
        <AnimatePresence exitBeforeEnter>
          <i
          className="fas fa-plus-circle fa-3x"
          onClick={toggle}
          />
        </AnimatePresence>
      </div>

      <div className="w-3/6">
        <Preview/>
      </div>

      <div className="w-1/6">
        <BuilderSettings/>
      </div>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfStatus: state.pdf,
  }
}

//TODO type for dispatch
const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: () => dispatch({
      type: 'TOGGLE_MODAL',
      payload: {
        flag: true,
        identifier: 'Categories'
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Builder)