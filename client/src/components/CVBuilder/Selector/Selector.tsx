import React, { Dispatch } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Action } from '../../../store/actions';
import { showCvBuilder } from '../../../store/actions/showBuilder';
import { toggleModal } from '../../../store/actions/toggleModal';
import { ActionType } from '../../../store/state_interfaces/appState';

/*
TO DO:
  Click on first div change the selector state, so it doesnt show selector but builder component
  Click on second div toggle the modal state and shows the CVSSelector component
*/

export default function Selector() {
  const dispatch = useDispatch()
  
  return (
    <div className="h-5/6 my-auto flex flex-wrap gap-10 p-8 bg-primary-bg justify-center content-center">
      <div
        className="bg-light w-80 h-96 flex flex-col justify-center items-center item-container cursor-pointer shadow-lg"
        onClick={()=> dispatch(showCvBuilder(true))}
      >
        <i className="fas fa-plus-circle fa-6x"></i>
      </div>
      <div
        className="bg-light w-80 h-96 flex justify-center items-center item-container cursor-pointer shadow-lg"
        onClick={()=>dispatch(toggleModal(true, 'CVs'))}
      >
        <i className="far fa-file fa-6x"></i>
      </div>
    </div>
  );
}

