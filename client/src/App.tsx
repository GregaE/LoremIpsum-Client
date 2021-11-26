import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  const isLoggedIn = true

  return isLoggedIn ? <Dashboard /> : <Login />
}

export default App;
