import { QualityCategoryProps } from "../../../../../../interfaces/QualityInterface";
import { motion } from "framer-motion";

export default function QualityCategory({ name, comments }:QualityCategoryProps) {

  const renderCategories = function () {
    if (comments && comments.length < 1) {
      return <div className="text-sm p-2">No suggestions in this area.</div>
    }
    return comments?.map(comment =>
      <div className="text-sm p-2" key={comment.QualityCode}>{comment.Message}</div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'tween' }}
      exit={{ opacity: 0 }}
    >
      <h4 className="p-2">{name}</h4>
      {renderCategories()}
    </motion.div>
  );
}
