import React, {useState} from 'react';
import {  Link } from "react-router-dom";
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { useDispatch } from 'react-redux';
import { headerName } from '../../redux/AppState/actionCreators/headerName'

export default function Header() {

  /*
  Get name from state and display it here
  */
  const dispatch = useDispatch();

  const [username, setUsername] = useState("Lorem Ipsum")
  const header = useTypedSelector((state) => state.headerName);
  const headerValue = header.headerName //Have to do this cause headerName is doubled for reducer and action..

  return (
    <div className="w-full h-1/10 py-4 bg-primary-bg flex flex-row justify-between items-center px-8">
      <h2>{headerValue}</h2>
      <Link to="/Profile">
      <div id="profile" className="flex flex-row justify-around items-center" 
        onClick={() => dispatch(headerName('Profile'))}>
        <h2>{username}</h2>
          <img
            className="w-10 h-10 rounded-full mx-8"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
      </div>
      </Link>
    </div>
  );
}