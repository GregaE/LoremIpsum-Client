import React from 'react';

import CVItem from '../../../MyCVs/CVItem/CVItem';

export default function CVSelector() {

  function renderCVs() {
    return Array(5).fill(<CVItem />)
  }

  /*
  TO DO:
    Every CVItem should hold a key that identifies the CV so when you click CVItem changes selector state fetching cv data
  */

  return (
    <div className="h-full flex flex-wrap items-center gap-10 p-5 overflow-scroll">
      {renderCVs()}
    </div>
  );
}