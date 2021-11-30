import React, {useState} from 'react';
import {  Link } from "react-router-dom";
import { useTypedSelector } from '../../utils/useTypeSelector'
import { useDispatch } from 'react-redux';
import { headerName } from '../../store/actions/headerName';
import { showCvBuilder } from '../../store/actions/showBuilder';


export default function Header() {

  /*
  Get name from state and display it here
  */
  const dispatch = useDispatch();

  const [username, setUsername] = useState("Lorem Ipsum")
  const header = useTypedSelector((state) => state.headerName);
  const headerValue = header.headerName //Have to do this cause headerName is doubled for reducer and action..

  const navigateAround = (name:string) => {
    dispatch({type:'HEADER_NAME', payload: name});
    dispatch({type:'SHOW_CVBUILDER', payload: false});
  }

  return (
    <div className="w-full h-1/10 py-4 bg-primary-bg flex flex-row justify-between items-center px-8">
      <h2>{headerValue}</h2>
      <Link to="/Profile">
      <div id="profile" className="flex flex-row justify-around items-center" 
        onClick={() => navigateAround('Profile')}>
        <h2>{username}</h2>
          <img
            className="w-10 h-10 rounded-full mx-8"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
      </div>
      </Link>
    </div>
  );
}