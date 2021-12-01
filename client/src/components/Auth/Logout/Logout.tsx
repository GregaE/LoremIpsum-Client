import Button from '../../Forms/Elements/Buttons/Button';
import { LogoutService } from '../../../utils/ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../utils/auth';

export default function Logout () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        LogoutService();
        handleAuth();
    }

    const handleAuth = () => {
        dispatch({type: 'TOGGLE_LOGIN', payload: {isLogin: false}});
        auth.logout(() => navigate('login'));
    }    

    return (
        <div >
          <Link to="/login">
            <div onClick={() => handleClick()}>
              <Button name="Logout" />
            </div>
          </Link>
        </div>
    )
}