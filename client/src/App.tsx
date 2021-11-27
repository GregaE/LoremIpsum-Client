import React, { useEffect, useState } from 'react';
// import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login/Login';
// import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import {getUser} from "./utils/ApiService"
import {User} from "./interfaces/UserInterface"
function App() {
  const [mockData, setMockData] = useState({})
  useEffect(()=>{
    getUser("/mock").then((res:User) => {
      setMockData({...res})
    })
    console.log(mockData)
  },[])
  const isLoggedIn = true

  return isLoggedIn ? <Dashboard /> : <Login />
}

export default App;
