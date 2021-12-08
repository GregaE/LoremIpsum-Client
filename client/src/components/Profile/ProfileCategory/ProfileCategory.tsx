import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import ProfileItem from './ProfileItem/ProfileItem';

//TODO: fix the any types of the props
function ProfileCategory({ name, items, toggle }: any) {
  const [expander, toggleExpand] = useState(false);
  
  function openCategories() {
    return items.map((item:any) => {
      return <ProfileItem key={item.id} item={item} categoryName={name}/>
    })
  }

  return (
    <div className="category-container w-full">
      <div className="flex flex-wrap px-10 py-3 gap-10 justify-between items-center">
        <i onClick={() => toggle(`${name}`)} className="fas fa-plus-circle text-2xl"></i>
        <h2>{name}</h2>
        <i
          onClick={() => toggleExpand(!expander)}
          className={expander
            ? "fas fa-chevron-down text-2xl"
            : "fas fa-minus cursor-pointer text-2xl"}
        ></i>
      </div>
      <AnimatePresence exitBeforeEnter>
        {expander && openCategories()}
      </AnimatePresence>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCategory);
