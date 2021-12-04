import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { Categories } from '../../../../../../interfaces/CategoriesInterface';
import {
  selectItem,
  unselectItem,
} from '../../../../../../store/actions/pdfActions';
import { useTypedSelector } from '../../../../../../utils/useTypeSelector';

export default function CategoryItem({
  item,
  categoryName,
}: {
  item: Categories;
  categoryName: string;
}) {
  const dispatch = useDispatch();
  const pdfItems = useTypedSelector(state => state.pdf);

  const [selected, toggleSelection] = useState(
    pdfItems &&
      pdfItems
        .find(pdfI => pdfI.name === categoryName)!
        .pdf.some(pd => pd.id === item.id)
  );

  //Manipulate here
  const itemName = () => {
    if (item.name) return item.name;
    if (item.language_name) return item.language_name;
    if (item.job_title) return item.job_title;
    if (item.degree) return item.degree;
  };

  const handleSelection = () => {
    selected
      ? dispatch(unselectItem(categoryName, item.id))
      : dispatch(selectItem(categoryName, item.id));
    toggleSelection(!selected);
  };

  return (
    <motion.div
      key="5" /// needs to pass actual key
      initial={{ opacity: 0, height: '0px' }}
      animate={{ opacity: 1, height: '40px' }}
      transition={{ type: 'tween' }}
      exit={{ opacity: 0, height: '0px' }}
      className="item-container"
    >
      <div className="group flex flex-row w-full ">
        <div
          onClick={() => handleSelection()}
          className="m-1 flex p-1 w-full cursor-pointer"
        >
          <i
            className={`${
              selected ? 'fas' : 'far'
            } fa-check-circle m-1 cursor-pointer`}
          ></i>
          <span className="font-normal group-hover:font-medium">
            {itemName()}
          </span>
        </div>
        <DotsVerticalIcon className="h-5 w-5 invisible group-hover:visible justify-self-end self-center cursor-pointer"></DotsVerticalIcon>
      </div>
    </motion.div>
  );
}
