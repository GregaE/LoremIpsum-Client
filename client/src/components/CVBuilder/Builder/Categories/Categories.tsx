import React from 'react';
import Category from './Category/Category';

export default function Categories() {

  function renderCategories() {
    return Array(0).fill(<Category />)
  }

  return (
    <div className="flex flex-col items-center gap-10 p-5 max-h-80 overflow-y-auto max-h-full min-h-0">
        {renderCategories()}
    </div>
  );
}