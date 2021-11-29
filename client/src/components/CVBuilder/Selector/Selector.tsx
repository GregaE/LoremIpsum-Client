import React from 'react';

/*
TO DO:
  Click on first div change the selector state, so it doesnt show selector but builder component
  Click on second div toggle the modal state and shows the CVSSelector component
*/

export default function Selector() {

  return (
    <div className="h-5/6 my-auto flex flex-wrap gap-10 p-8 bg-primary-bg justify-center content-center">
      <div className="bg-light w-80 h-96 flex flex-col justify-center items-center item-container cursor-pointer"
        >
        <i className="fas fa-plus-circle fa-6x" onClick={()=>console.log('here goes a dispatch')}></i>
      </div>
      <div className="bg-light w-80 h-96 flex justify-center items-center item-container cursor-pointer"
        >
        <i className="far fa-file fa-6x" onClick={()=>console.log('here goes a dispatch')}></i>
      </div>
    </div>
  );
}