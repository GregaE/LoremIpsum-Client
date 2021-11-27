import React from 'react';

export default function Profile() {

  return (
    <div className="p-2">
      <h2 className="underline text-3xl p-2">Your personal data</h2>
      <div className="flex flex-row justify-center items-center p-4 ml-5">
        <div className="w-1/6 h-1/6 m-5">
        <img src="https://i.graphicmama.com/uploads/2019/3/5c948ff89ffbc-Cute%20Banana%20Cartoon%20Vector%20Character.png" alt="profile-img"/>
        </div>
        <div className="w-2/3 h-1/6 flex flex-col w-auto p-4 h-1/6 m-5 justify-center bg-primary rounded-lg">
          <p className="p-4 underline text-2xl">Hello, Banana Joe!</p>
          <div className="p-8">
            <p>Name: Banana Joe John</p>
            <p>E-mail: joe_banana@bananas.com</p>
            <p>Password: change your password</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2 className="underline text-3xl">Your categories</h2>
        <div className="flex flex-col content-around p-4">
          <p className="w-full bg-light m-2 p-1 rounded-lg">SKILLS</p>
          <p className="w-full bg-light m-2 p-1 rounded-lg">EDUCATION</p>
          <p className="w-full bg-light m-2 p-1 rounded-lg">WORK EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
}