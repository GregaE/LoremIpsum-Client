import React from 'react';
import {  Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div className="bg-primary text-light w-1/6 h-screen flex flex-col items-center gap-6">
      <Link to="/">
      <div className="w-4/6 h-1/6 m-5">
        <img className="rounded-full" src="https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/banaan-large.jpg?itok=dZxH6D_w" alt="logo"/>
      </div>
      </Link>
      <ul className="flex flex-col flex-wrap justify-around items-center h-3/6 w-full">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/CVBuilder">CVBuilder</Link>
        </li>
        <li className="nav-link">
          <Link to="/MyCVs">MyCVs</Link>
        </li>
      </ul>
    </div>
  );
}