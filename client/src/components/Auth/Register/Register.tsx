import React, { useState } from 'react';
import Auth from '../../../utils/Auth';
import { RegisterService } from '../../../utils/ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginDetails } from '../../../store/actions/toggleLogin';

import { LockClosedIcon } from '@heroicons/react/solid'

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
      const { email, password, firstName, lastName } = state;
      const user = { email, password, firstName, lastName};
      const res = await RegisterService(user);
      if (res.error) {
        alert(`${res.message}`);
        setState(initialState);
      } else {
        dispatch({type: 'TOGGLE_LOGIN', payload: {isLoggedIn: true, userId: res.user_id} });
        dispatch(loginDetails(res.personal_detail));
        localStorage.setItem('user_id', res.user_id);
        Auth.login(() => navigate('/'));
      }
    };

    const validateForm = () => {
      return (
        !state.email || !state.password || !state.firstName || !state.lastName
      );
    };

    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-md w-full space-y-8 bg-light rounded-container p-10">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Create your CV in just a few steps
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                 <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="first-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="First name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">
                  Last name
                </label>
                 <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="last-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Last name"
                  onChange={handleChange}
                />
              </div>
              <br/>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-sm">
              <span>Already registered? </span>
              <span className="font-medium text-primary hover:text-primary-x cursor-pointer" onClick={() => props.setRegister(false)}>
                  Click here to log in.
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-light bg-primary hover:bg-primary-x focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={validateForm()}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Register;