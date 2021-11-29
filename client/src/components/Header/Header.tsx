import React, {useState} from 'react';
import {  Link } from "react-router-dom";
import {useSelector} from 'react-redux'

export default function Header() {

  /*
  Get name from state and display it here
  Get name of selectedComponent¿¿
  */

  const [username, setUsername] = useState("Lorem Ipsum")

  return (
    <div className="w-full h-1/10 py-4 bg-primary-bg flex flex-row justify-between items-center px-8">
      <h2>FML</h2>
      <Link to="/Profile">
      <div id="profile" className="flex flex-row justify-around items-center">
        <h2>{username}</h2>
          <img
            className="w-10 h-10 rounded-full mx-8"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
      </div>
      </Link>
    </div>
  );
}