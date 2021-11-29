import { combineReducers } from 'redux';
import login from './isLogin'
import headerName from './header'

const reducers = combineReducers({
    login,
    headerName,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;