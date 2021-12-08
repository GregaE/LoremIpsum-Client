import { useState } from "react"
import Register from "./Register/Register";
import Login from "./Login/Login";

export default function AuthLogin () {
    const [ register, setRegister ] = useState(false);

    return (
        <div className="h-screen">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8
                bg-hero bg-center bg-no-repeat bg-cover shadow-darken before:absolute before:shadow-darken">
            {register
            ? <Register setRegister={setRegister}/>
            : <Login setRegister={setRegister}/>}
            </div>
        </div>
    )
}