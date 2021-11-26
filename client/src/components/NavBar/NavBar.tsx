import React from 'react';
import {  Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/CVBuilder">CVBuilder</Link>
      </li>
      <li>
        <Link to="/MyCVs">MyCVs</Link>
      </li>
      <li>
        <Link to="/Profile">Profile</Link>
      </li>
    </div>
  );
}