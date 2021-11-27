import React from 'react';


export default function Selector() {

  return (
    <div className="h-5/6 my-auto flex flex-wrap gap-10 p-8 bg-primary-bg justify-center content-center">
      <div className="bg-light w-80 h-96 flex flex-col justify-center items-center rounded-xl shadow-lg">
        <i className="fas fa-plus-circle fa-6x"></i>
      </div>
      <div className="bg-light w-80 h-96 flex justify-center items-center rounded-xl shadow-lg">
        <i className="far fa-file fa-6x"></i>
      </div>
    </div>
  );
}