import React from 'react';
import {  Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { headerName } from '../../redux/AppState/actionCreators/headerName'

export default function NavBar() {

  const dispatch = useDispatch();

  return (
    <div className="bg-primary text-light w-1/6 h-screen flex flex-col items-center gap-6">
      <div className="w-4/6 h-1/6 m-5">
      <Link to="/">
        <img className="rounded-full" src="https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/banaan-large.jpg?itok=dZxH6D_w" alt="logo"/>
      </Link>
      </div>
      <ul className="flex flex-col flex-wrap justify-around items-center h-3/6 w-full">
        <li className="nav-link" onClick={() => dispatch(headerName('Home'))}>
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link" onClick={() => dispatch(headerName('CVBuilder'))}>
          <Link to="/CVBuilder">CVBuilder</Link>
        </li>
        <li className="nav-link" onClick={() => dispatch(headerName('MyCVs'))}>
          <Link to="/MyCVs">MyCVs</Link>
        </li>
      </ul>
    </div>
  );
}