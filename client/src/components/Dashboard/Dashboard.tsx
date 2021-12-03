import { useEffect } from 'react';
import { connect } from 'react-redux';

import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

import Home from '../Home/Home';
import CVBuilder from '../CVBuilder/CVBuilder';
import MyCVs from '../MyCVs/MyCVs';
import Profile from '../Profile/Profile';

import { AnimatePresence } from 'framer-motion';
import { PDFRender } from '../CVBuilder/PDF-Render/PDF-Render';

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
}: any) {
  const location = useLocation();

  useEffect(() => {
    getUser();
    getLanguages();
    getCertificates();
    getSkills();
    getEducation();
    getExperience();
    getCVs();
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/pdf" element={<PDFRender />} />
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
    getUser: () =>
      dispatch({
        //CAUTION USER AND PERSONAL DETAILS ARENT THE SAME!!!
        type: 'FETCH_DATA',
        endpoint: '/user',
        method: 'GET',
        id: 'ckwkk683g00067mufbbnpb097',
        dispatch: 'PERSONAL_DETAILS',
      }),

    getLanguages: () =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/languages',
        method: 'GET',
        id: 'ckwkk683g00067mufbbnpb097',
        dispatch: 'ALL_LANGUAGES',
      }),
    getCertificates: () =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/certificates',
        method: 'GET',
        id: 'ckwkk683g00067mufbbnpb097',
        dispatch: 'ALL_CERTIFICATES',
      }),
    getSkills: () =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/skills',
        method: 'GET',
        id: 'ckwkk683g00067mufbbnpb097',
        dispatch: 'ALL_SKILLS',
      }),
    getEducation: () =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/education',
        method: 'GET',
        id: 'ckwkk683g00067mufbbnpb097',
        dispatch: 'ALL_EDUCATION',
      }),
    getExperience: () =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/workExperience',
        method: 'GET',
        id: 'ckwkk683g00067mufbbnpb097',
        dispatch: 'ALL_EXPERIENCES',
      }),
    getCVs: () =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/savedCV',
        method: 'GET',
        id: 'ckwkk683g00067mufbbnpb097',
        dispatch: 'ALL_CVS',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
