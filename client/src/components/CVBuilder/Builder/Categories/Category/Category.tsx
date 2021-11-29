import React, { useState } from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import { AnimatePresence } from 'framer-motion';

export default function Category() {

  const [expander, toggleExpand] = useState(false);

  return (
    <div className="category-container">
      <div className="flex flex-wrap gap-10">
        <i className="fas fa-plus-circle"></i>
        <h2>A Category</h2>
        <i onClick={() => toggleExpand(!expander)} className="fas fa-minus cursor-pointer"></i>
      </div>
      <AnimatePresence exitBeforeEnter>
        {expander && Array(3).fill(<CategoryItem key="34" />)}
      </AnimatePresence>
    </div>
  );
}