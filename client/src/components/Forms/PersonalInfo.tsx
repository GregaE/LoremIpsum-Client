import React, { useState } from 'react';
import Button from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';

// import { useTypedSelector } from '../../utils/useTypeSelector'
import { PersonalDetails } from '../../interfaces/CategoriesInterface';

export default function PersonalInfo() {

  const inicialState: PersonalDetails = {
    id: '',
    email: '',
    phone_number: '', 
    image: '', 
    first_name: '', 
    last_name: '', 
    street: '', 
    postcode: '', 
    city: '', 
    country: '', 
    headline: '', 
    userId: '',
  }

  const [personalDetails, setPersonalDetails] = useState(inicialState);

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setPersonalDetails({...personalDetails, [target.name]: target.value})
  }

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        {/* Miss Photo Input/Holder */}
        <TextInput callback={handleForm}
         type="text" 
         value={personalDetails.first_name + ' ' + personalDetails.last_name} 
         placeholder="full name" label=""/>
        <div id="personalInfo_form_contact" className="flex flex-row">
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.email ? personalDetails.email : ''} 
          placeholder="email" label=""/>
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.phone_number ? personalDetails.phone_number : ''} 
          placeholder="phone" label=""/>
        </div>
        <TextInput callback={handleForm}
        type="text" 
        value={personalDetails.street ? personalDetails.street : ''} 
        placeholder="street" label=""/>
        <div id="personalInfo_form_address" className="flex flex-row">
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.postcode ? personalDetails.postcode : ''} 
          placeholder="postcode" 
          label=""/>
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.city ? personalDetails.city : ''} 
          placeholder="city" 
          label=""/>
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.country ? personalDetails.country : ''} 
          placeholder="country" 
          label=""/>
        </div>
      </form>
      <Button/>
    </div>
  );
}