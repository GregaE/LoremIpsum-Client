import { useTypedSelector } from '../../../utils/useTypeSelector';

import CategorySelector from './CategorySelector/CategorySelector';
import CVSelector from './CVSelector/CVSelector';
import ItemEditor from './ItemEditor/ItemEditor';

import { motion } from 'framer-motion';

export default function Modal() {
  //TODO: Display the <ItemEditor> Based on a form that will come from the key
  // of the item when click on it

  /* Strings:
    CVs
    Categories

    const categories:string[] = ['CERTIFICATES','EDUCATION','LANGUAGES','SKILLS','WORK EXPERIENCE'];
  */
  const { identifier } = useTypedSelector(state => state.toggleModal);

  //TODO: We dont need item editor with current Element lookup - this can be refactored
  const modalInstance = () => {
    switch (identifier) {
      case 'CVs':
        return <CVSelector />;
      case 'Categories':
        return <CategorySelector />;
      case 'Certificates':
      case 'Education':
      case 'Languages':
      case 'Skills':
      case 'Work Experience':
      case 'InterviewForm':
        return <ItemEditor />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="h-full w-full flex flex-col justify-center items-center absolute left-0 top-0"
      initial={{ transform: 'scale(0)' }}
      animate={{ transform: 'scale(1)' }}
      exit={{ transform: 'scale(0)' }}
    >
      <div
        id="modal-content"
        className="flex h-auto max-h-full w-auto min-w-2/4 max-w-full p-10 bg-primary rounded-xl"
      >
        {modalInstance()}
      </div>
    </motion.div>
  );
}
