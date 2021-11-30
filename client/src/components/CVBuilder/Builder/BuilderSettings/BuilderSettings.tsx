import React from 'react';
import Button from '../../../Forms/Elements/Buttons/Button';
// import PDFRender from '../../Modal/ItemEditor/PDF-Render/PDF-Render';
import { useNavigate } from 'react-router-dom';

export default function BuilderSettings() {
  const navigate = useNavigate();

  function handleClick () {
    navigate('/cvbuilder/pdf');
  }

  return (
    <div>
      <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5" onClick={() => handleClick()}>
        <Button name="Download"/>
      </div>
    </div>
  );
}