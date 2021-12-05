import { useState } from 'react'
import Register from './Register/Register';
import Login from './Login/Login';

export default function AuthLogin () {
    const [ register, setRegister ] = useState(false);

    return (
        <div className='h-screen'>
        {register
        ? <Register setRegister={setRegister}/>
        : <Login setRegister={setRegister}/>}
        </div>
    )
}