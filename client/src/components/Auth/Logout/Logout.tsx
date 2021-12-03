import Button from '../../Forms/Elements/Buttons/Button';
import { LogoutService } from '../../../utils/ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../utils/Auth';

export default function Logout () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    LogoutService();
    handleAuth();
  }

  const handleAuth = () => {
    dispatch({type: 'TOGGLE_LOGIN', payload: false });
    auth.logout(() => navigate('login'));
  }

  return (
    <div>
      <Link to="/">
        <div onClick={() => handleClick()}>
          <Button name="Logout" />
        </div>
      </Link>
    </div>
  )
}