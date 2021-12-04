import { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem/CategoryItem';
import { AnimatePresence } from 'framer-motion';
import {
  Categories,
  EnumCategories,
} from '../../../../../interfaces/CategoriesInterface';
import { ActionType } from '../../../../../store/state_interfaces/appState';
import { Action } from '../../../../../store/actions';

function Category({
  name,
  items,
  toggle,
}: {
  name: string;
  items: Categories[];
  toggle: (id: string) => void;
}) {
  const [expander, toggleExpand] = useState(false);
  console.log(items);
  function openCategories() {
    return items.map(item => {
      return <CategoryItem key={item.id} item={item} categoryName={name} />;
    });
  }

  return (
    <div className="category-container w-full">
      <div className="flex flex-wrap p-4 gap-10 justify-between items-center">
        <i
          onClick={() => toggle(`${name}`)}
          className="fas fa-plus-circle cursor-pointer"
        ></i>
        <h2 className="font-medium text-lg">{name}</h2>
        <i
          onClick={() => toggleExpand(!expander)}
          className={`fas fa-${
            expander ? 'minus' : 'chevron-down'
          } cursor-pointer`}
        ></i>
      </div>
      <AnimatePresence exitBeforeEnter>
        {expander && openCategories()}
      </AnimatePresence>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    toggle: (id: string) =>
      dispatch({
        type: ActionType.TOGGLE_MODAL,
        payload: {
          flag: true,
          identifier: id,
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(Category);
