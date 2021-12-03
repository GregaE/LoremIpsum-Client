import React, {useState} from 'react';
import {  Link } from 'react-router-dom';

import { connect } from 'react-redux';

//TODO props types
function Header({navigate, header, userDetail}: any) {

  const {personal_details} = userDetail
  return (
    <div className='w-full h-1/10 py-4 bg-primary-bg flex flex-row justify-between items-center px-8'>
      <h2>{header.headerName}</h2>
      <Link to='/Profile'>
      <div id='profile' className='flex flex-row justify-around items-center'
        onClick={() => navigate('Profile')}>
        <h2>{personal_details.username}</h2>
          <img
            className='w-10 h-10 rounded-full mx-8'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' alt=''/>
      </div>
      </Link>
    </div>
  );
}

//TODO state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    userDetail: state.personal_details,
    header: state.headerName
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    navigate: (name: string) => {
      dispatch({
        type: 'HEADER_NAME',
        payload: name
      });
      dispatch({
        type: 'SHOW_CVBUILDER',
        payload: false
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);