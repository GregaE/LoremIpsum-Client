import {
  createStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { middleware } from './middleware/api';

import skillReducer from './reducers/skillReducer';
import certificateReducer from './reducers/certificateReducer';
import experienceReducer from './reducers/experienceReducer';

const reducers = combineReducers({
  skills: skillReducer,
  certificates: certificateReducer,
  experience: experienceReducer,
});

export default createStore(reducers, applyMiddleware(middleware));
