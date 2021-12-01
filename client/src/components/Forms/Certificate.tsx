import React, { useState } from 'react';
import Button from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';

import { Certificates } from '../../interfaces/CategoriesInterface';

export default function Certificate() {

  const initialState: Certificates = {
    id: '',
    name: '',
    description: '',
    userId: ''
  };
  const [certificate, setCertificate] = useState(initialState)

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setCertificate({...certificate, [target.name]: target.value})
  }
  // On submit do the below
  ///dispatch ADD_CERTIICATE => middleware >> API CALL > RETURNS DB RECORD > CHANGES THE STATE

  return (
    <div className='object-center m-auto text-center w-1/2 h-auto bg-primary rounded-lg'>
      <p className='text-light my-8'>Add new certificate</p>
      <form>
        <TextInput callback={handleForm}
          type='text' name='name' value={certificate.name} placeholder='HelloInput' label='Title of the certificate'/>
        <TextInput callback={handleForm}
          type='text' name='description' value={certificate.description ? certificate.description : ''} placeholder='WorldInput' label='Description...'/>
      </form>
      <Button/>
    </div>
  );
}