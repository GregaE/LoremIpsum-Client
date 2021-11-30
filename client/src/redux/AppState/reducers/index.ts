import { combineReducers } from 'redux';
import login from './isLogin';
import headerName from './header';
import showCvBuilder from './showBuilder';
import toggleModal from './toggleModal';

const reducers = combineReducers({
  login,
  headerName,
  showCvBuilder,
  toggleModal,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
