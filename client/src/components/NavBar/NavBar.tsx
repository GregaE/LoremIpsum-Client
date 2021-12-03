import React from 'react';
import {  Link } from "react-router-dom";
import { connect } from 'react-redux';
import Logout from '../Auth/Logout/Logout';

//TODO - props type
function NavBar({navigate}: any) {

  return (
    <div className='bg-primary text-light w-1/6 h-screen flex flex-col items-center gap-6'>
      <div className='w-4/6 h-1/6 m-5'>
        <Link to='/' >
          <img onClick={() => navigate('Home')}
            className='rounded-full' src='https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/banaan-large.jpg?itok=dZxH6D_w' alt='logo'/>
        </Link>
        </div>
        <ul className='flex flex-col flex-wrap justify-around items-center h-3/6 w-5/6'>
          <Link to='/' className='w-full'>
            <li className='nav-link focus:bg-light' onClick={() => navigate('Home')}>
                Home
            </li>
          </Link>
          <Link to='/CVBuilder' className='w-full'>
            <li className='nav-link focus:bg-light ' onClick={() => navigate('CVBuilder')}>
              CVBuilder
            </li>
          </Link>
          <Link to='/MyCVs' className='w-full'>
          <li className='nav-link' onClick={() => navigate('MyCVs')}>
            MyCVs
          </li>
        </Link>
        <li className="nav-link">
          <Logout/>
        </li>
      </ul>
    </div>
  );
}

//TODO - dispatch type
const mapDispatchToProps = (dispatch: any) => {
  return {
    navigate: (name: string) => {
      dispatch({
        type:'HEADER_NAME',
        payload: name
      });
      dispatch({
        type:'SHOW_CVBUILDER',
        payload: false
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(NavBar);