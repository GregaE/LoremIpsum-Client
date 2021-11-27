import React from 'react';
import CVItem from './CVItem/CVItem';

export default function MyCVs() {

  /*
  We should fetch CVs from user from here
  At the same time we could let option to remove them... for "nice to have"
  */

  function renderCVs() {
    return Array(5).fill(<CVItem />)
  }

  return (
    <div className="h-full flex flex-wrap items-center gap-10 p-5 overflow-scroll">
      {renderCVs()}
    </div>
  );
}