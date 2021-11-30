import React from 'react';
import { connect } from 'react-redux'

/*
TO DO:
  Click on first div change the selector state, so it doesnt show selector but builder component
  Click on second div toggle the modal state and shows the CVSSelector component
*/

export default function Selector({create, toggle}: any) {

  return (
    <div className="h-5/6 my-auto flex flex-wrap gap-10 p-8 bg-primary-bg justify-center content-center">
      <div className="bg-light w-80 h-96 flex flex-col justify-center items-center item-container cursor-pointer shadow-lg"
        onClick={create}>
        <i className="fas fa-plus-circle fa-6x"></i>
      </div>
      <div className="bg-light w-80 h-96 flex justify-center items-center item-container cursor-pointer shadow-lg"
        onClick={toggle}>
        <i className="far fa-file fa-6x"></i>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: () => dispatch({
      type: 'TOGGLE_MODAL',
      payload: {
        flag: true,
        indentifier: 'CVs'
      }
    }),
    create: () => dispatch({
      type: 'SHOW_CVBUILDER',
      payload: true
    })
  }
}

connect(mapDispatchToProps)(Selector);