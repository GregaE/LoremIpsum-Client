import { useState } from "react"
import Register from "../Forms/Register";
import Login from "./Login/Login";

export default function AuthLogin () {
    const [ register, setRegister ] = useState(false);

    return (
        <div>
        {register
        ? <Register setRegister={setRegister}/>
        : <Login setRegister={setRegister}/>}
        </div>
    )
}