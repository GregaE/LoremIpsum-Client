import React, {useState} from 'react';


export default function Welcome() {

  /*
  Get name from state and display it here
  */

  const [username, setUsername] = useState("Lorem Ipsum")

  return (
    <div id="" className="w-full h-1/2 flex flex-row justify-center content-center">
      <div className="w-5/6 h-4/5 bg-primary my-auto flex flex-col p-4 rounded-lg">
        <h1 className="text-light">Dias buenas {username}</h1>
        <p>What about looking for a job you lazy piece of shit¿¿¿¿¿¿¿</p>
      </div>
    </div>
  );
}