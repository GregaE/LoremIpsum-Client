import { connect } from 'react-redux';
import { motion } from 'framer-motion';

function CategoryItem({ item }: any) {
  //Manipulate here
  const itemName = () => {
    if (item.name) return item.name;
    if (item.language_name) return item.language_name;
    if (item.job_title) return item.job_title;
    if (item.degree) return item.degree;
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
        <i className="fas fa-check-circle"></i>
      </div>
      <div>{itemName()}</div>
    </motion.div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
