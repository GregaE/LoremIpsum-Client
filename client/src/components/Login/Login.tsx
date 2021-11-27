import TextInput from '../Forms/Elements/Inputs/TextInput';
import Button from '../Forms/Elements/Buttons/Button';

export default function Login() {

  return (
    <div className="flex flex-col w-screen h-screen bg-pink-400 m-auto justify-center items-center text-accent bg-primary-bg">
      <div className="flex flex-col w-1/2 h-1/2 m-auto justify-center items-center align-center border-solid border-4">
      <TextInput  type="text" value="" placeholder="Please, insert your e-mail" label="E-mail"/>
      <TextInput type="password" value="" placeholder="Please, insert your password" label="Password"/>
      <div className="flex w-20 justify-center border-solid border-2">
      <Button name="Log In"/>
      </div>
      </div>
    </div>
  );
}