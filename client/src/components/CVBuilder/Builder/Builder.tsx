import React from 'react';

import PersonalData from './PersonalData/PersonalData';
import Categories from './Categories/Categories';
import Preview from './Preview/Preview';
import BuilderSettings from './BuilderSettings/BuilderSettings';

interface builderProps {
  toggleModal: (v:number)=>void,
}

export default function Builder(props: builderProps) {

  return (
    <div className="h-full flex flex-wrap overflow-scroll">
      <div className="column1 w-2/6 border border-solid border-black overflow-scroll">
        <PersonalData/>
        <Categories />
        <i className="fas fa-plus-circle fa-3x" onClick={()=>props.toggleModal(1)}/>
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