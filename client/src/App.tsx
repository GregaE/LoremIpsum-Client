import React, { useEffect, useState } from 'react';
import {useTypedSelector} from './utils/useTypeSelector'

import Login from './components/Login/Login';

import Dashboard from './components/Dashboard/Dashboard';

import {getUser} from "./utils/ApiService"
import {User} from "./interfaces/UserInterface"
import { connect } from 'react-redux';

function App() {

  const [mockData, setMockData] = useState({})
  useEffect(()=>{
    getUser("/mock").then((res:User) => {
      setMockData({...res})
    }).catch(e => console.log(e))
  },[])

  const { isLogin } = useTypedSelector((state) => state.login);

  return isLogin ? <Dashboard /> : <Login />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
