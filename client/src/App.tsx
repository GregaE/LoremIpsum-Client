import React, { useEffect, useState } from 'react';
import {useTypedSelector} from './utils/useTypeSelector'

import Login from './components/Auth/Login/Login';
import { withCookies, Cookies } from 'react-cookie';
import Dashboard from './components/Dashboard/Dashboard';
import { useDispatch } from 'react-redux';
import AuthLogin from './components/Auth/AuthLogin';

import { getUser } from "./utils/ApiService"
import { User } from "./interfaces/UserInterface"
import { connect } from 'react-redux';

function App() {
const cookies = new Cookies();

  // const { isLoggedIn } = useTypedSelector((state) => state.login);

  if (cookies.get('sid')) {
    return <Dashboard/>
  } else {

    return <AuthLogin />;
  }
}

const mapStateToProps = (state: any) => ({
  error: state.error,
  loading: state.loading,
  skills: state.skills
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleLoading: () => dispatch({type: 'LOADING'}),
    fetchData: () => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/skills',
      method: 'GET',
      id: 'ckwkk683g00067mufbbnpb097',
      dispatch: 'ALL_SKILLS'
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
