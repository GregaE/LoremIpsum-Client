import React from 'react';
import Button from '../../../Forms/Elements/Buttons/Button';
import { toggleModal } from '../../../../redux/AppState/actionCreators/toggleModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function BuilderSettings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick () {
    dispatch({type: 'TOGGLE_MODAL', payload: {flag: true, identifier: 'pdf'}});
  }

  return (
    <div>
      <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5" onClick={() => handleClick()}>
        <Button name="Download"/>
      </div>
    </div>
  );
}