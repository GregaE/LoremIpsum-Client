import { QualityCategoryProps } from "../../../../../../interfaces/QualityInterface";
import { AnimatePresence, motion } from "framer-motion";

export default function QualityCategory({ name, comments }:QualityCategoryProps) {

  const renderCategories = function () {
    const blacklistedCodes = ['300', '112'];
    const filteredList = comments?.filter(comment => !blacklistedCodes.includes(comment.QualityCode))
    if (filteredList && filteredList.length < 1) {
      return <div className="text-sm p-2">No suggestions in this area.</div>
    }
    return filteredList?.map(comment =>
      <motion.li
        className="text-sm p-2"
        key={comment.QualityCode}
        initial={{ opacity: 0, transform:'translateX(300px)' }}
        animate={{ opacity: 1, transform:'translateX(0px)' }}
        transition={{ type: 'tween' }}
        exit={{ opacity: 0, transform:'translateX(300px)' }}
      >
        - {comment.Message}
      </motion.li>
    )
  }

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'tween' }}
      exit={{ opacity: 0 }}
    >
      <h4 className="px-2">{name}</h4>
      <AnimatePresence exitBeforeEnter>
        {renderCategories()}
      </AnimatePresence>
    </motion.ul>
  );
}
