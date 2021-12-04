import { useState } from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import {
  Categories,
  PDF,
} from '../../../../../../interfaces/CategoriesInterface';

function CategoryItem({
  item,
  categoryName,
  selectItem,
  unselectItem,
  pdfItems,
}: {
  item: Categories;
  categoryName: string;
  selectItem: (name: string, itemID: string | undefined) => {};
  unselectItem: (name: string, itemID: string | undefined) => {};
  pdfItems: PDF[] | any; // not sure if object possibly undefined?
}) {
  const [selected, toggleSelection] = useState(
    pdfItems!
      .find((pdfI: PDF) => pdfI.name === categoryName)
      .pdf.some((pd: Categories) => pd.id === item.id)
      ? true
      : false
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
      ? unselectItem(categoryName, item.id)
      : selectItem(categoryName, item.id);
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

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfItems: state.pdf,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectItem: (name: string, itemID: string | undefined) =>
      dispatch({
        type: 'SELECT_ITEM',
        payload: {
          name,
          itemID,
        },
      }),
    unselectItem: (name: string, itemID: string | undefined) =>
      dispatch({
        type: 'UNSELECT_ITEM',
        payload: {
          name,
          itemID,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
