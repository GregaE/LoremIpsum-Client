import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

import Home from '../Home/Home';
import CVBuilder from '../CVBuilder/CVBuilder';
import MyCVs from '../MyCVs/MyCVs';
import Profile from '../Profile/Profile';

import Modal from '../CVBuilder/Modal/Modal';
import Login from '../Login/Login';
import Builder from '../CVBuilder/Builder/Builder';


export default function Dashboard() {

  /*
    As you log in here we display your name in HEADER and HOME component (get it from state)
    Should we get also my cvs here? as we could move directly to "MyCVs"¿¿
    Or should we fetch them from MyCVs component with a beautiful loading placeholder¿¿
  */

  return (
    <div className="flex w-screen h-screen bg-primary-bg">
      <NavBar/>
      <div className="flex flex-col w-5/6 h-full">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cvbuilder" element={<CVBuilder/>} />
            <Route path="/mycvs" element={<MyCVs/>} />
            <Route path="/test" element={<Builder/>} /> {/* Test complete components render (TODO: Replace Profile with Component Test)*/}
            <Route path="/login" element={<Login/>} /> {/* Temporal route */}
            <Route path="/profile" element={<Profile/>} /> {/* Temporal route */}
        </Routes>
      </div>
      <Outlet/>
    </div>
  );
}