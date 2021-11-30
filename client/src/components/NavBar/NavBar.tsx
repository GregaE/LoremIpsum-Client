import React from 'react';
import {  Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { headerName } from '../../store/actions/headerName';
import { showCvBuilder } from '../../store/actions/showBuilder';

export default function NavBar() {

  const dispatch = useDispatch();

  const navigateAround = (name:string) => {
    dispatch({type:'HEADER_NAME', payload: name});
    dispatch({type:'SHOW_CVBUILDER', payload: false});
  }

  return (
    <div className="bg-primary text-light w-1/6 h-screen flex flex-col items-center gap-6">
      <div className="w-4/6 h-1/6 m-5">
        <Link to="/" >
          <img onClick={() => navigateAround('Home')}
            className="rounded-full" src="https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/banaan-large.jpg?itok=dZxH6D_w" alt="logo"/>
        </Link>
        </div>
        <ul className="flex flex-col flex-wrap justify-around items-center h-3/6 w-full">
          <Link to="/" className="w-full">
            <li className="nav-link" onClick={() => navigateAround('Home')}>
                Home
            </li>
          </Link>
          <Link to="/CVBuilder" className="w-full">
            <li className="nav-link" onClick={() => navigateAround('CVBuilder')}>
              CVBuilder
            </li>
          </Link>
          <Link to="/MyCVs" className="w-full">
          <li className="nav-link" onClick={() => navigateAround('MyCVs')}>
            MyCVs
          </li>
        </Link>
      </ul>
    </div>
  );
}