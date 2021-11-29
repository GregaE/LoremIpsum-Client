import React from 'react';
import Button from '../../../Forms/Elements/Buttons/Button';
import PDFRender from '../../Modal/ItemEditor/PDF-Render/PDF-Render';

export default function BuilderSettings() {

  return (
    <div onClick={() => <PDFRender/>} >
      <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5">
        <Button name="Download"/>
      </div>
    </div>
  );
}