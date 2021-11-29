import TextInput from '../Forms/Elements/Inputs/TextInput';
import Button from '../Forms/Elements/Buttons/Button';

import { useDispatch } from 'react-redux';
import { toggleLogin } from '../../redux/AppState/actionCreators/toggleLogin'

export default function Login() {

/*
  Here we just basically have a form and get user and pwd
*/

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col w-screen h-screen m-auto justify-center items-center text-accent bg-primary-bg">
      <div className="flex flex-col w-1/2 h-1/2 m-auto justify-center items-center align-center border-solid border-4">
      <TextInput  type="text" value="" placeholder="Please, insert your e-mail" label="E-mail"/>
      <TextInput type="password" value="" placeholder="Please, insert your password" label="Password"/>
      <div className="flex w-20 justify-center border-solid border-2"
      onClick={() => dispatch(toggleLogin())}>
      <Button name="Log In"/>
      </div>
      </div>
    </div>
  );
}