import { useTypedSelector } from '../../../utils/useTypeSelector';

import CategorySelector from './CategorySelector/CategorySelector';
import CVSelector from './CVSelector/CVSelector';
import ItemEditor from './ItemEditor/ItemEditor';
// import PDFRender from './ItemEditor/PDF-Render/PDF-Render';

import { motion } from 'framer-motion';

export default function Modal() {

  //TODO: Display the <ItemEditor> Based on a form that will come from the key
  // of the item when click on it

  /* Strings:
    CVs
    Categories

    const categories:string[] = ['CERTIFICATES','EDUCATION','LANGUAGES','SKILLS','WORK EXPERIENCE'];
  */
  const {identifier} = useTypedSelector((state)=> state.toggleModal)

  const modalInstance = () => {
    switch (identifier) {
      case 'CVs':
        return <CVSelector/>
      case 'Categories':
        return <CategorySelector/>
      case 'Certificates':
      case 'Education':
      case 'Languages':
      case 'Skills':
      case 'Work Experience':
        return <ItemEditor/>
      default:
        return null;
    }
  }

  return (
    <motion.div
      className="h-full w-full flex flex-col justify-center items-center absolute left-0 top-0"
      initial={{ transform: 'scale(0)'}}
      animate={{ transform: 'scale(1)'}}
      exit={{ transform: 'scale(0)'}}
      >
      <div id="modal-content" className="flex justify-center h-5/6 w-5/6 bg-primary rounded-xl">
        {modalInstance()}
      </div>
    </motion.div>
  );
}