import React from 'react';
import { connect } from 'react-redux'
//if works - remove
// import { useTypedSelector } from '../../utils/useTypeSelector';

import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

import Home from '../Home/Home';
import CVBuilder from '../CVBuilder/CVBuilder';
import MyCVs from '../MyCVs/MyCVs';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';

import Certificate from '../Forms/Certificate';
import Builder from '../CVBuilder/Builder/Builder';
import Education from '../Forms/Education';

import { AnimatePresence } from 'framer-motion';

//TODO props type
function Dashboard({toggle, modal}: any) {

  const location = useLocation();

  /*
    As you log in here we display your name in HEADER and HOME component (get it from state)
    Should we get also my cvs here? as we could move directly to 'MyCVs'¿¿
    Or should we fetch them from MyCVs component with a beautiful loading placeholder¿¿
  */

  const closeModal = (e:any) => {
    while(e.target.id !== 'modal-content') {
      if(e.target.id === 'modal-content') return
      if(e.target.parentNode.localName === 'body') {
        if (modal.flag) toggle();
        return;
      }
      e.target = e.target.parentNode;
    }
  }

  return (
    <div className='flex w-screen h-screen bg-primary-bg' onClick={(e)=>closeModal(e)}>
      <NavBar/>
      <div className='flex flex-col w-5/6 h-full'>
        <Header/>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
              <Route path='/' element={<Home/>} />
              <Route path='/cvbuilder' element={<CVBuilder/>} />
              <Route path='/mycvs' element={<MyCVs/>} />
              <Route path='/test' element={<Profile/>} /> {/* Test complete components render (TODO: Replace Profile with Component Test)*/}
              <Route path='/anothertest' element={<Education/>} /> {/* Test complete components render (TODO: Replace Profile with Component Test)*/}
              <Route path='/login' element={<Login/>} /> {/* Temporal route */}
              <Route path='/form' element={<Certificate/>} /> {/* Temporal route */}
              <Route path='/profile' element={<Profile/>} /> {/* Temporal route */}
          </Routes>
        </AnimatePresence>
      </div>
      <Outlet/>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    modal: state.toggleModal
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: () => dispatch({
      type: 'TOGGLE_MODAL',
      payload: {
        flag: false,
        identifier: ''
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);