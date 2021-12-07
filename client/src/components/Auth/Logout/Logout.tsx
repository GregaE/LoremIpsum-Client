import Button from '../../Forms/Elements/Buttons/Button';
import { LogoutService } from '../../../utils/ApiService';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import React from 'react';

function Logout ({changeLoginStatus}: {changeLoginStatus: Function}) {
  const navigate = useNavigate();

  const handleClick = async () => {
    await LogoutService();
    handleAuth();
  }

  const handleAuth = () => {
    changeLoginStatus(false);
    Auth.logout(() => navigate('/'));
  }

  return (
    <div>
      <Link to="/">
        <div>
          <Button
            name="Logout"
            callback={handleClick}
          >
            Logout
          </Button>
        </div>
      </Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch: React.Dispatch<{
  type: string
  payload: boolean
}>) => {
  return {
    changeLoginStatus: (payload: boolean) => dispatch({type: 'TOGGLE_LOGIN', payload: payload})
  }
}

export default connect(null, mapDispatchToProps)(Logout);