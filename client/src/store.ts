import { configureStore } from '@reduxjs/toolkit';
import { skillsReducer } from './store/slices/reducers/userStateReducer';

export const store = configureStore({
  combine
});