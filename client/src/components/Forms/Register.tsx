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
    firstName: '',
    lastName: '',
  };

  const Register = () => {
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
      // Add logic to send send a request to the API service /register
      // REMOVE-START
      const { email, password, firstName, lastName } = state;
      const user = { email, password, firstName, lastName };
      const res = await RegisterService(user);
      if (res.error) {
        alert(`${res.message}`);
        setState(initialState);
      } else {
        // REMOVE-END
        // This sets isAuthenticated = true and redirects to profile
        dispatch({type: 'TOGGLE_LOGIN', payload: {isLoggedIn: true}});
        Auth.login(() => navigate('/home'));
        // REMOVE-START
      }
      // REMOVE-END
    };

    const validateForm = () => {
      return (
        !state.email || !state.password || !state.firstName || !state.lastName
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
            value={state.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Nameson"
            name="lastName"
            value={state.lastName}
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