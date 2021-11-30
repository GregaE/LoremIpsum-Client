import { createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import { middleware } from './middleware/api';

import skillReducer from './reducers/skillReducer';
import certificateReducer from './reducers/certificateReducer';
import experienceReducer from './reducers/experienceReducer';
import languageReducer from "./reducers/languageReducer";
import educationReducer from "./reducers/educationReducer";

const reducers = combineReducers({
  skills: skillReducer,
  certificates: certificateReducer,
  experience: experienceReducer,
  languages: languageReducer,
  education: educationReducer
});

export default createStore(reducers, applyMiddleware(middleware));