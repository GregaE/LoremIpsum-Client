import React, { useEffect, useState } from 'react';
import { useTypedSelector } from './utils/useTypeSelector';

import { withCookies, Cookies } from 'react-cookie';
import Dashboard from './components/Dashboard/Dashboard';
import { useDispatch } from 'react-redux';
import AuthLogin from './components/Auth/AuthLogin';

import { connect } from 'react-redux';

function App({login}:any) {
const cookies = new Cookies();
const { isLoggedIn } = login;

const render =  isLoggedIn || cookies.get('sid') ? <Dashboard/> : <AuthLogin />;

return (
  render
  )
}

const mapStateToProps = (state: any) => ({
  error: state.error,
  loading: state.loading,
  skills: state.skills,
  login: state.login
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleLoading: () => dispatch({ type: 'LOADING' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
