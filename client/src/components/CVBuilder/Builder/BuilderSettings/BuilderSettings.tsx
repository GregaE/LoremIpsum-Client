import React from 'react';
import Button from '../../../Forms/Elements/Buttons/Button';

export default function BuilderSettings() {

// Here the button needs to take the data from the preview and send to the PDF compiler 

  return (
    <div>
      <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5">
        <Button name="Download"/>
      </div>
    </div>
  );
}