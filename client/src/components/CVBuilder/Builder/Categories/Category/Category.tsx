import React, { useState } from 'react';
import CategoryItem from './CategoryItem/CategoryItem';

export default function Category() {

  const [expander, toggleExpand] = useState(false);

  function renderCategoryItems() {
    if (expander) {
      return Array(5).fill(<CategoryItem />)
    }
  }

  function expandCategory() {
    // expands category and shows category items
    if (expander) {
      toggleExpand(false)
    }
    else {
      toggleExpand(true)
    }
  }

  return (
    <div className="category-container">
      <div className="flex flex-wrap gap-10">
        <i className="fas fa-plus-circle"></i>
        <h2>A Category</h2>
        <i onClick={() => expandCategory()} className="fas fa-minus cursor-pointer"></i>
      </div>
      {renderCategoryItems()}
    </div>
  );
}