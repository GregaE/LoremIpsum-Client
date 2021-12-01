import React, {useState} from 'react';
import {  Link } from 'react-router-dom';
//if works - remove
// import { useTypedSelector } from '../../utils/useTypeSelector'
import { connect } from 'react-redux';

//TODO props types
function Header({navigate, header}: any) {

  /*
  Get name from state and display it here
  */
  const [username, setUsername] = useState('Lorem Ipsum')
  //if works - remove comment
  // const header = useTypedSelector((state) => state.headerName);
  // const headerValue = header.headerName //Have to do this cause headerName is doubled for reducer and action..

  return (
    <div className='w-full h-1/10 py-4 bg-primary-bg flex flex-row justify-between items-center px-8'>
      <h2>{header.headerName}</h2>
      <Link to='/Profile'>
      <div id='profile' className='flex flex-row justify-around items-center'
        onClick={() => navigate('Profile')}>
        <h2>{username}</h2>
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
    //if it does not work - try

    //TODO - add user from store as well
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