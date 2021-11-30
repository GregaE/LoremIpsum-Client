import { createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import { middleware } from './middleware/api';
import skillReducer from './reducers/skillReducer';

const reducers = combineReducers({
  skills: skillReducer
});

export default createStore(reducers, applyMiddleware(middleware));