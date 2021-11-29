import React, { useEffect, useState } from 'react';
import {useTypedSelector} from './hooks/useTypeSelector'

import Login from './components/Login/Login';

import Dashboard from './components/Dashboard/Dashboard';
import {getUser} from "./utils/ApiService"
import {User} from "./interfaces/UserInterface"

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

export default App;
