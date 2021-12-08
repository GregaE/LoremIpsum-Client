import {
  createStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { middleware } from './middleware/api';

import skillReducer from './reducers/skillReducer';
import certificateReducer from './reducers/certificateReducer';
import experienceReducer from './reducers/experienceReducer';
import languageReducer from './reducers/languageReducer';
import educationReducer from './reducers/educationReducer';
import cvsReducer from './reducers/cvReducer';
import personalDetailsReducer from './reducers/personalDetailsReducer';
import login from './reducers/isLoggedIn';
import headerName from './reducers/header';
import showCvBuilder from './reducers/showBuilder';
import toggleModal from './reducers/toggleModal';
import pdfReducer from './reducers/pdfReducer';
import loginReducer from './reducers/loginReducer';
import { interviewReducer } from './reducers/InterviewReducer';

const reducers = combineReducers({
  skills: skillReducer,
  certificates: certificateReducer,
  experience: experienceReducer,
  languages: languageReducer,
  education: educationReducer,
  cvs: cvsReducer,
  personal_details: personalDetailsReducer,
  login,
  headerName,
  showCvBuilder,
  toggleModal,
  pdf: pdfReducer,
  user: loginReducer,
  interviews: interviewReducer,
});

export default createStore(reducers, applyMiddleware(middleware));
export type RootState = ReturnType<typeof reducers>;
