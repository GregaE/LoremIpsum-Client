import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

import Home from '../Home/Home';
import CVBuilder from '../CVBuilder/CVBuilder';
import MyCVs from '../MyCVs/MyCVs';
import Profile from '../Profile/Profile';

import Certificate from '../Forms/Certificate';
import Education from '../Forms/Education';

import { AnimatePresence } from 'framer-motion';
import PDFRender from '../CVBuilder/PDF-Render/PDF-Render';

//TODO props type
function Dashboard({
  modal,
  toggle,
  getUser,
  getLanguages,
  getCertificates,
  getSkills,
  getEducation,
  getExperience,
  getCVs,
  login
}: any) {

  const location = useLocation();
  // const dispatch = useDispatch();
  // dispatch({type: 'TOGGLE_LOGIN', payload: {userId: localStorage.getItem('user_id')} });
  
  const { userId } = login;


  useEffect(() => {
    getUser(userId);
    getLanguages(userId);
    getCertificates(userId);
    getSkills(userId);
    getEducation(userId);
    getExperience(userId);
    getCVs(userId);
  }, []);

  /*
    As you log in here we display your name in HEADER and HOME component (get it from state)
    Should we get also my cvs here? as we could move directly to 'MyCVs'¿¿
    Or should we fetch them from MyCVs component with a beautiful loading placeholder¿¿
  */

  const closeModal = (e: any) => {
    while (e.target.id !== 'modal-content') {
      if (e.target.id === 'modal-content') return;
      if (e.target.parentNode.localName === 'body') {
        if (modal.flag) toggle();
        return;
      }
      e.target = e.target.parentNode;
    }
  };

  return (
    <div
      className="flex w-screen h-screen bg-primary-bg"
      onClick={e => closeModal(e)}
    >
      <NavBar />
      <div className="flex flex-col w-5/6 h-full">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/cvbuilder" element={<CVBuilder />} />
            <Route path="/mycvs" element={<MyCVs />} />
            <Route path="/test" element={<Profile />} />{' '}
            {/* Test complete components render (TODO: Replace Profile with Component Test)*/}
            <Route path="/anothertest" element={<Education />} />{' '}
            {/* Test complete components render (TODO: Replace Profile with Component Test)*/}
            <Route path="/form" element={<Certificate />} />{' '}
            {/* Temporal route */}
            <Route path="/profile" element={<Profile />} />{' '}
            {/* Temporal route */}
          </Routes>
        </AnimatePresence>
      </div>
      <Outlet />
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    modal: state.toggleModal,
    userDetail: state.personal_details,
    skills: state.skills,
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: () =>
      dispatch({
        type: 'TOGGLE_MODAL',
        payload: {
          flag: false,
          identifier: '',
        },
      }),
      
    getUser: (userId:string) =>
    
      dispatch({
        //CAUTION USER AND PERSONAL DETAILS ARENT THE SAME!!!
        type: 'FETCH_DATA',
        endpoint: '/user',
        method: 'GET',
        id: userId,
        dispatch: 'PERSONAL_DETAILS',
      }),

    getLanguages: (userId:string) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/languages',
        method: 'GET',
        id: userId,
        dispatch: 'ALL_LANGUAGES',
      }),
    getCertificates: (userId:string) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/certificates',
        method: 'GET',
        id: userId,
        dispatch: 'ALL_CERTIFICATES',
      }),
    getSkills: (userId:string) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/skills',
        method: 'GET',
        id: userId,
        dispatch: 'ALL_SKILLS',
      }),
    getEducation: (userId:string) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/education',
        method: 'GET',
        id: userId,
        dispatch: 'ALL_EDUCATION',
      }),
    getExperience: (userId:string) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/workExperience',
        method: 'GET',
        id: userId,
        dispatch: 'ALL_EXPERIENCES',
      }),
    getCVs: (userId:string) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/savedCV',
        method: 'GET',
        id: userId,
        dispatch: 'ALL_CVS',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
