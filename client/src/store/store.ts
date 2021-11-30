import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { middleware } from './middleware/api';

import skillReducer from './reducers/skillReducer';
import certificateReducer from './reducers/certificateReducer';
import experienceReducer from './reducers/experienceReducer';
import languageReducer from './reducers/languageReducer';
import educationReducer from './reducers/educationReducer';
import cvsReducer from './reducers/cvReducer';
import personalDetailsReducer from './reducers/personalDetailsReducer';

const reducers = combineReducers({
  skills: skillReducer,
  certificates: certificateReducer,
  experience: experienceReducer,
  languages: languageReducer,
  education: educationReducer,
  cvs: cvsReducer,
  personal_details: personalDetailsReducer
});

export default createStore(reducers, applyMiddleware(middleware));