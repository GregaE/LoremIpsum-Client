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
      <div className="column1 w-2/6 border border-solid border-black overflow-scroll">
        <PersonalData/>
        <Categories />
        <AnimatePresence exitBeforeEnter>
          <i
          className="fas fa-plus-circle fa-3x"
          onClick={toggle}
          />
        </AnimatePresence>
      </div>

      <div className="column2 w-3/6">
        <Preview/>
      </div>

      <div className="column3 w-1/6">
        <BuilderSettings/>
      </div>
    </div>
  );
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

export default connect(null, mapDispatchToProps)(Builder)