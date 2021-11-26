import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

import Home from '../Home/Home';
import CVBuilder from '../CVBuilder/CVBuilder';
import MyCVs from '../MyCVs/MyCVs';
import Profile from '../Profile/Profile';

import Certificate from '../Forms/Certificate';


export default function Dashboard() {

  return (
    <div>
      <NavBar/>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CVBuilder" element={<CVBuilder/>} />
          <Route path="/MyCVs" element={<MyCVs/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Test" element={<Certificate/>} /> {/* Test complete components render (TODO: Replace Profile with Component Test)*/}
      </Routes>
      <Outlet/>
    </div>
  );
}