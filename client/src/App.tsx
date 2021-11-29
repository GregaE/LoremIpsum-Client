import React, { useEffect, useState } from 'react';
import { useSelector} from "react-redux";

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
    // console.log(mockData)
  },[])

  // const isLoggedIn = useSelector(state => state.toggleLogin)

  const isLoggedIn = true
  return isLoggedIn ? <Dashboard /> : <Login />
}

export default App;
