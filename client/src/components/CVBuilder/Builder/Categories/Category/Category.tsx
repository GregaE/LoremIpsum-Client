import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CategoryItem from './CategoryItem/CategoryItem';
import { AnimatePresence } from 'framer-motion';
import { Categories } from '../../../../../interfaces/CategoriesInterface';
import { toggleModal } from '../../../../../store/actions/toggleModal';

export default function Category({
  name,
  items,
}: {
  name: string;
  items: Categories[];
}) {
  const [expander, toggleExpand] = useState(false);
  const dispatch = useDispatch();

  function openCategories() {
    return items.map(item => {
      return <CategoryItem key={item.id} item={item} categoryName={name} />;
    });
  }

  return (
    <div className="category-container w-full">
      <div className="flex flex-wrap p-4 gap-10 justify-between items-center">
        <i
          onClick={() => dispatch(toggleModal(true, name))}
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
