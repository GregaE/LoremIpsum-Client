import { useState } from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem/CategoryItem';
import { AnimatePresence } from 'framer-motion';
import { Categories, PDF } from '../../../../../interfaces/CategoriesInterface';

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

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfItems: state.pdf,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: (id: string) =>
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
