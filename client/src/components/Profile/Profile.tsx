import React from 'react';

export default function Profile() {

  return (
    <div>
      <h2>Your personal data</h2>
      <div className="flex p-4 ml-5">
        <div className="w-1/6 h-1/6 m-5">
        <img src="https://i.graphicmama.com/uploads/2019/3/5c948ff89ffbc-Cute%20Banana%20Cartoon%20Vector%20Character.png" alt="profile-img"/>
        </div>
        <div className="w-2/3 h-1/6 flex flex-col w-auto h-1/6 m-5 justify-center bg-primary rounded-lg">
          <p className="p-4">Hello, Banana Joe!</p>
          <p>Name: Banana Joe John</p>
          <p>E-mail: joe_banana@bananas.com</p>
          <p>Password: change your password</p>
        </div>
      </div>
      <div>
        <h2>Your categories</h2>
      </div>
    </div>
  );
}