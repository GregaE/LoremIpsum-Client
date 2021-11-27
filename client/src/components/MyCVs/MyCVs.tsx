import React from 'react';
import CVItem from './CVItem/CVItem';

export default function MyCVs() {
  
  function renderCVs() {
    return Array(5).fill(<CVItem />) 
  }

  return (
    <div className="flex flex-wrap items-center gap-10 p-5 ">
      {renderCVs()}
    </div>
  );
}