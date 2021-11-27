import React from 'react';
import Category from './Category/Category';

export default function Categories() {

  function renderCategories() {
    return Array(5).fill(<Category />)
  }

  return (
    <div className="h-2/3 flex flex-col items-center gap-10 p-5 max-h-80 overflow-scroll">
      {renderCategories()}
    </div>
  );
}