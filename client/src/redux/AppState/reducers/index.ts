import { combineReducers } from 'redux';
import login from './isLogin'
import headerName from './header'
import showCvBuilder from './showBuilder'
import toggleModal from './toggleModal'

import formCertificate from './formCertificate'
import formEducation from './formEducation';
import formLanguage from './formLanguage';
import formSkills from './formSkills';
import formExperience from './formExperience';
import formPersonal from './formPersonalInfo';

const reducers = combineReducers({
    login,
    headerName,
    showCvBuilder,
    toggleModal,
    formCertificate,
    formEducation,
    formLanguage,
    formSkills,
    formExperience,
    formPersonal,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;