import React, { useState } from 'react';
import Auth from '../../utils/Auth';
import { RegisterService } from '../../utils/ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
// import Button from './Elements/Buttons/Button';
// import TextInput from './Elements/Inputs/TextInput';

const initialState = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  };

  const Register = ( props: {setRegister: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
      const { name, value } = target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const { email, password, first_name, last_name } = state;
      const user = { email, password, first_name, last_name };
      const res = await RegisterService(user);
      if (res.error) {
        alert(`${res.message}`);
        setState(initialState);
      } else {
        dispatch({type: 'TOGGLE_LOGIN', payload: true});
        Auth.login(() => navigate('/home'));
      }
    };

    const validateForm = () => {
      return (
        !state.email || !state.password || !state.first_name || !state.last_name
      );
    };

    return (
      <div>
        <h2>Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name@mail.com"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="supersecretthingy"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Name"
            name="firstName"
            value={state.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Nameson"
            name="lastName"
            value={state.last_name}
            onChange={handleChange}
          />
          <button className="form-submit" type="submit" disabled={validateForm()}>
            Register
          </button>
        </form>
      </div>
    );
  };

  export default Register;