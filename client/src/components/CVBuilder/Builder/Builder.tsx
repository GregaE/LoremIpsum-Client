import { useDispatch } from 'react-redux';

import PersonalData from './PersonalData/PersonalData';
import Categories from './Categories/Categories';
import Preview from './Preview/Preview';
import BuilderSettings from './BuilderSettings/BuilderSettings';

import { AnimatePresence } from 'framer-motion';
import { toggleModal } from '../../../store/actions/toggleModal';

//TODO types for toggle
export default function Builder() {
  const dispatch = useDispatch();

  return (
    <div className="h-full flex flex-wrap overflow-scroll">
      <div className="w-2/6 pl-10 overflow-hiden text-center">
        <PersonalData />
        <Categories />
        <AnimatePresence exitBeforeEnter>
          <i
            className="fas fa-plus-circle fa-3x"
            onClick={() => dispatch(toggleModal(true, 'Categories'))}
          />
        </AnimatePresence>
      </div>

      <div className="w-3/6">
        <Preview />
      </div>

      <div className="w-1/6">
        <BuilderSettings />
      </div>
    </div>
  );
}
