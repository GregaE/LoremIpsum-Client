import React, { useState } from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem/CategoryItem';
import { AnimatePresence } from 'framer-motion';

//TODO: fix the any types of the props
function Category({ name, items, toggle, pdfItems }: any) {
  const [expander, toggleExpand] = useState(false);

  function renderCategories() {
    console.log(items);
    return items.map((item: any) => {
      return <CategoryItem key={item.id} item={item} />;
    });
  }
  return (
    <div className="category-container w-full">
      <div className="flex flex-wrap p-4 gap-10 justify-between items-center">
        <i onClick={() => toggle(`${name}`)} className="fas fa-plus-circle"></i>
        <h2>{name}</h2>
        <i
          onClick={() => toggleExpand(!expander)}
          className="fas fa-minus cursor-pointer"
        ></i>
      </div>
      <AnimatePresence exitBeforeEnter>
        {expander && renderCategories()}
      </AnimatePresence>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfItems: state.pdf,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: (id: any) =>
      dispatch({
        type: 'TOGGLE_MODAL',
        payload: {
          flag: true,
          identifier: id,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
