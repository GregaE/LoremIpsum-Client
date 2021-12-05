/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Auth from '../../../utils/Auth';
import { connect } from 'react-redux';
import { RegisterService } from '../../../utils/ApiService';
import { useNavigate } from 'react-router';

import { LockClosedIcon } from '@heroicons/react/solid'

const initialState = {
    email: '',
    password: '',
    username: ''
  };

const Register = ( {setRegister, postDetails, toggleLogin, getUser}:any) => {

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // const user = { email, password, username};
    const user = {...state}
    const res = await RegisterService(user);
    console.log('res',res);
    console.log('user',user);
    const {user_id} = res
    console.log('user_id',user_id);
    const data = getUser(res.user_id)
    console.log(' get user data: ', data)
    // if (res.error) {
    //   alert(`${res.message}`);
    //   setState(initialState);
    // } else {
    //   // toggleLogin(res.user_id)
    //   localStorage.setItem('user_id', res.user_id);
    //   console.log('userID before magic data',res.user_id);
    //   const magicData = {
    //     id: user_id,
    //     email: "email",
    //     phone_number: "",
    //     image: "",
    //     first_name: "username",
    //     last_name: "",
    //     street: "",
    //     postcode: "",
    //     city: "",
    //     country: "",
    //     headline: "",
    //     userId: user_id,
    //   }
    //   console.log('magicData: ', magicData)
    //   const postRes = await postDetails(magicData)
    //   console.log('postRes',postRes);
    //   Auth.login(() => navigate('/'));
    // }
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.username
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
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="username" className="sr-only">
                User name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            {/*<div>
              <label htmlFor="last-name" className="sr-only">
                Last name
              </label>
              <input
                id="last-name"
                name="last_name"
                type="text"
                autoComplete="last-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>*/}
          </div>
          <div className="text-sm">
            <span>Already registered? </span>
            <span className="font-medium text-primary hover:text-primary-x cursor-pointer" onClick={() => setRegister(false)}>
                Click here to log in.
            </span>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-light bg-primary hover:bg-primary-x focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={validateForm()}
              onClick={() => handleSubmit()}
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

const mapStateToProps = (state: any) => ({
  error: state.error,
  loading: state.loading,
  skills: state.skills,
  login: state.login
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleLogin: (id:any) => dispatch({
      type: 'TOGGLE_LOGIN', 
      payload: {isLoggedIn: false, userId: id}}),
    postDetails: (data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/personalDetails',
      method: 'POST',
      id:'',
      dispatch: 'PERSONAL_DETAILS',
      payload: data
    }),
    getUser: (userId:string) =>
    dispatch({
      type: 'FETCH_DATA',
      endpoint: '/personalDetails',
      method: 'GET',
      id: userId,
      dispatch: 'PERSONAL_DETAILS',
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);