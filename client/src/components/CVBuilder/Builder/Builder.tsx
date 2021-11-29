import React from 'react';

import PersonalData from './PersonalData/PersonalData';
import Categories from './Categories/Categories';
import Preview from './Preview/Preview';
import BuilderSettings from './BuilderSettings/BuilderSettings';

import { AnimatePresence } from 'framer-motion';


export default function Builder() {

  return (
    <div className="h-full flex flex-wrap overflow-scroll">
      <div className="column1 w-2/6 border border-solid border-black overflow-scroll">
        <PersonalData/>
        <Categories />
        <AnimatePresence exitBeforeEnter>
          <i className="fas fa-plus-circle fa-3x" />
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