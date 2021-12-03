import Button from '../../Forms/Elements/Buttons/Button';
import { LogoutService } from '../../../utils/ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

export default function Logout () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await LogoutService();
    handleAuth();
  }

  const handleAuth = () => {
    dispatch({type: 'TOGGLE_LOGIN', payload: false });
    Auth.logout(() => navigate('/'));
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