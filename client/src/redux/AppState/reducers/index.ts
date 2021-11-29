import { combineReducers } from 'redux';
import login from './isLogin'
import headerName from './header'
import showCvBuilder from './showBuilder'

const reducers = combineReducers({
    login,
    headerName,
    showCvBuilder,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;