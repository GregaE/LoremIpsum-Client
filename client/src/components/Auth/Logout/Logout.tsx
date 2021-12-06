import Button from '../../Forms/Elements/Buttons/Button';
import { LogoutService } from '../../../utils/ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

export default function Logout () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    dispatch({type: 'TOGGLE_LOGIN', payload: {isLoggedIn: false, userId: ''} });
    Auth.logout(() => navigate('/'));
  }

  const handleClick = async () => {
    await LogoutService();
    localStorage.removeItem('user_id')
    handleAuth();
  }

  return (
    <div>
      <Link to="/">
        <div>
          <Button name="Logout" callback={handleClick}>Logout</Button>
        </div>
      </Link>
    </div>
  )
}