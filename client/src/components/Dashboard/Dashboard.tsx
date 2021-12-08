import { useDispatch } from 'react-redux';

import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

import Home from '../Home/Home';
import CVBuilder from '../CVBuilder/CVBuilder';
import MyCVs from '../MyCVs/MyCVs';
import Profile from '../Profile/Profile';

import { AnimatePresence } from 'framer-motion';
import { toggleModal } from '../../store/actions/toggleModal';
import { useTypedSelector } from '../../utils/useTypeSelector';

import AuthLogin from '../Auth/AuthLogin'

//TODO props type
export default function Dashboard() {
  const dispatch = useDispatch();

  const location = useLocation();
  const { flag } = useTypedSelector(state => state.toggleModal);

  const closeModal = (e: any) => {
    while (e.target.id !== 'modal-content') {
      if (e.target.id === 'modal-content') return;
      if (e.target.parentNode.localName === 'body') {
        if (flag) dispatch(toggleModal(false, ''));
        return;
      }
      e.target = e.target.parentNode;
    }
  };

  return (
    <div
      className='flex w-full h-full bg-primary'
      onClick={e => closeModal(e)}
    >
      <NavBar />
      <div className='flex flex-col w-5/6 h-full'>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='/cvbuilder' element={<CVBuilder />} />
            <Route path='/mycvs' element={<MyCVs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/test' element={<AuthLogin />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Outlet />
    </div>
  );
}
