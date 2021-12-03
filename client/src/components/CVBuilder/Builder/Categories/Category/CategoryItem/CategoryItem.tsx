import { useState } from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

function CategoryItem({
  item,
  categoryName,
  selectItem,
  unselectItem,
  pdfItems,
}: any) {
  const [selected, toggleSelection] = useState(
    pdfItems
      .find((pdfI: any) => pdfI.name === categoryName)
      .pdf.some((pd: any) => pd.id === item.id)
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
    console.log('pdfItems: ', pdfItems);
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
      <div>
        {selected ? (
          <i
            className="fas fa-check-circle"
            onClick={() => handleSelection()}
          ></i>
        ) : (
          <i
            className="far fa-check-circle"
            onClick={() => handleSelection()}
          ></i>
        )}
      </div>
      <div>{itemName()}</div>
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
    selectItem: (name: any, itemID: any) =>
      dispatch({
        type: 'SELECT_ITEM',
        payload: {
          name,
          itemID,
        },
      }),
    unselectItem: (name: any, itemID: any) =>
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
