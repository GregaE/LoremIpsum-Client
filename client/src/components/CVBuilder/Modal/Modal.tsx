import {ReactElement} from 'react';
import {useSelector} from 'react-redux'

import CategorySelector from './CategorySelector/CategorySelector';
import CVSelector from './CVSelector/CVSelector';
import ItemEditor from './ItemEditor/ItemEditor';

import { motion } from 'framer-motion';

/*
TO DO:
  If you click outside modal-content div then should toggle modal state
*/

export default function Modal() {

  //Display sth based on array index
<<<<<<< HEAD

  const modalInstance:ReactElement[] = [<CVSelector/>, <CategorySelector/>, <ItemEditor/>]
=======
  // const modalInstance:ReactElement[] = [<CVSelector/>, <CategorySelector/>, <ItemEditor/>]
>>>>>>> magi

  return (
    <motion.div
      className="h-full w-full flex flex-col justify-center items-center absolute left-0 top-0"
      initial={{ transform: 'scale(0)'}}
      animate={{ transform: 'scale(1)'}}
<<<<<<< HEAD
      exit={{ transform: 'scale(0)'}}>
      <div id="modal-content" className="h-5/6 w-5/6 bg-primary rounded-xl">
        {modalInstance[0]}
=======
      exit={{ transform: 'scale(0)'}}
      >
      <div id="modal-content" className="h-5/6 w-5/6 bg-primary rounded-xl">
        {/* {modalInstance} */}
>>>>>>> magi
      </div>
    </motion.div>
  );
}