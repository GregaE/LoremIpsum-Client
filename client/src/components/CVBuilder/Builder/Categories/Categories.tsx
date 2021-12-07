//@ts-nocheck => categories issue with TS
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import Category from './Category/Category';

import { AnimatePresence } from 'framer-motion';

export default function Categories({toggle}: any) {
  // Array of objects I let it here for future implementation
  const {
    pdf,
    languages: { languages },
    certificates: { certificates },
    skills: { skills },
    education: { education },
    experience: { experience },
  } = useTypedSelector(state => state);

  function renderCategories() {
    return pdf.map(category => {
      switch (category.name) {
        case 'Certificates':
          category.items = [...certificates];
          break;

        case 'Education':
          category.items = [...education];
          break;

        case 'Languages':
          category.items = [...languages];
          break;

        case 'Skills':
          category.items = [...skills];
          break;

        case 'Work Experience':
          category.items = [...experience];
          break;

        default:
          break;
      }
      return (
        <Category
          key={category.name}
          name={category.name}
          items={category.items}
        />
      );
    });
  }

  return (
    <div className='h-auto max-h-full flex flex-nowrap flex-col items-center gap-10 p-5'>
      {renderCategories()}
        <AnimatePresence exitBeforeEnter>
          <i className='fas fa-plus-circle fa-3x' onClick={toggle} />
        </AnimatePresence>
    </div>
  );
}
