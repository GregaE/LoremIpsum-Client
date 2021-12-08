import { useState } from "react"
import Register from "./Register/Register";
import Login from "./Login/Login";

export default function AuthLogin () {
    const [ register, setRegister ] = useState(false);

    return (
        <div className="h-screen">
            <div className="min-h-full flex items-center justify-center gap-24 py-12 px-4 sm:px-6 lg:px-8
                bg-hero bg-center bg-no-repeat bg-cover shadow-darken">
                <div>
                    {register
                    ? <Register setRegister={setRegister}/>
                    : <Login setRegister={setRegister}/>}
                </div>
                <div className="text-4xl text-light self-start mt-60 text-center">
                    <p className="pb-10">Looking for a job?</p>
                    <p className="pb-5">Manage your CVs and applications in one place</p>
                    <p>with Lorem Ipsum</p>
                </div>
            </div>
        </div>
    )
}