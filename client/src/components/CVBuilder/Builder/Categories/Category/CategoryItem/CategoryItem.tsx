import { motion } from 'framer-motion';

export default function CategoryItem() {

  return (
    <motion.div
      key="5" /// needs to pass actual key
      initial={{ opacity: 0, height: '0px' }}
      animate={{ opacity: 1, height: '40px'}}
      transition={{type:'tween'}}
      exit={{ opacity: 0, height: '0px' }}
      className="item-container">
      <div>
        <i className="fas fa-check-circle"></i>
      </div>
      <div>
        Item Name
      </div>
    </motion.div>
  );
}