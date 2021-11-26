import React from 'react';

import PersonalData from './PersonalData/PersonalData';
import Categories from './Categories/Categories';
import Preview from './Preview/Preview';
import BuilderSettings from './BuilderSettings/BuilderSettings';

export default function Builder() {

  return (
    <div>
      <div className="column1">
        <PersonalData/>
        <Categories/>
      </div>

      <div className="column2">
        <Preview/>
      </div>

      <div className="column3">
        <BuilderSettings/>
      </div>
    </div>
  );
}