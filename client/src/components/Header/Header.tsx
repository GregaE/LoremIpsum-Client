import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { LogoutService } from '../../utils/ApiService';
import Auth from '../../utils/Auth';

//TODO props types
function Header({ header, userDetails, navigateOptions }: any) {
  const { personal_details } = userDetails;
  const {first_name, last_name} = personal_details;

  const [expander, toggleExpand] = useState(false);

  function displayOptions() {
    
    const optionsNavigation = () => {
      toggleExpand(!expander)
      navigateOptions()
      navigate('/profile')
    }
    let options = [
      { name: 'Edit Profile', action: optionsNavigation },
      { name: 'Logout', action: handleClick },
    ];

    return options.map(option => {
      return (
        <motion.div
          key={option.name}
          onClick={() => option.action()}
          className={`${'true'} py-2 px-4 h-20 w-52 cursor-pointer bg-primary leading-9 hover:bg-primary-x`}
          initial={{ opacity: 0, height: '0px' }}
          animate={{ opacity: 1, height: '50px' }}
          transition={{ type: 'tween' }}
          exit={{ opacity: 0, height: '0px' }}
        >
          {option.name}
        </motion.div>
      );
    });
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toProfile = () => {
    navigate('/profile')
  }

  const handleAuth = () => {
    dispatch({
      type: 'TOGGLE_LOGIN',
      payload: { isLoggedIn: false, userId: '' },
    });
    Auth.logout(() => navigate('/'));
  };

  const handleClick = async () => {
    await LogoutService();
    localStorage.removeItem('user_id');
    handleAuth();
  };

  return (
    <div className='w-full max-w-full h-header bg-primary-bg flex items-center'>
      <div className='bg-primary text-3xl text-light text-primary w-1/8 h-full rounded-br-full flex flex-wrap justify-around items-center capitalize p-4 mr-10'>
        <h2>{header.headerName}</h2>
      </div>
      <div className='py-4 px-8 z-10 w-7/8 flex items-center justify-end'>
        <div
          onClick={() => toggleExpand(!expander)}
          id='profile'
          className='w-auto bg-primary text-light rounded-full flex flex-wrap justify-around items-center capitalize cursor-pointer hover:bg-primary-x'
        >
          <div className='flex gap-5 justify-center items-center py-2 px-4'>
            <img
              className='w-10 h-10 rounded-full'
              src={
                personal_details.image
                  ? personal_details.image
                  : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
              }
              alt=''
            />
            <h2>
              {first_name} {last_name}
            </h2>
            <i
              className={`fas fa-${
                expander ? 'minus' : 'chevron-down'
              } cursor-pointer`}
            ></i>
          </div>
        </div>
        <div className='absolute text-light h-48 top-20'>
          <AnimatePresence exitBeforeEnter>
            {expander && displayOptions()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

//TODO state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    userDetails: state.personal_details,
    header: state.headerName,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    navigateOptions: () => {
      dispatch({
        type: 'HEADER_NAME',
        payload: 'Profile',
      });
      dispatch({
        type: 'SHOW_CVBUILDER',
        payload: false,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
