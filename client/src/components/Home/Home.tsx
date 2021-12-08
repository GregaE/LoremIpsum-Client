import Welcome from './Welcome/Welcome';
import CalendarComp from './Calendar/Calendar';
import Tracker from './Tracker/Tracker';
import Modal from '../CVBuilder/Modal/Modal';
import { motion } from 'framer-motion';
import { useTypedSelector } from '../../utils/useTypeSelector';

export default function Home() {
  const { flag } = useTypedSelector(state => state.toggleModal);

  const modal = flag ? <Modal /> : null;

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 0.1 },
    },
    exit: {
      opacity: 0,
    },
  };

  /*
  Here (in the future) we should show data from calendar/tracker and whatever we want to display in welcome component.
  In the meantime we just use the name for the welcome (not pass but get from state in Welcome)
  */

  return (
    <motion.div
      id="home-container"
      className="w-full h-main bg-primary-bg flex flex-row overflow-y-auto rounded-tl-corner"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}>
      <div id="main-section" className="w-4/6 h-full flex flex-col justify-start">
        <Welcome/>
        <Tracker/>
      </div>
      <div id="right-section" className="w-2/6 h-full">
        <CalendarComp />
      </div>
      {modal}
    </motion.div>
  );
}
