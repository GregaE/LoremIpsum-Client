import React from 'react';
import Buttons from './Elements/Buttons/Buttons';
import TextInput from './Elements/Inputs/TextInput';
// import SelectInput from './Elements/Inputs/SelectInput';

export default function PersonalInfo() {

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        {/* Miss Photo Input/Holder */}
        <TextInput type="text" value="" placeholder="full name" label=""/>
        <div id="personalInfo_form_contact" className="flex flex-row">
          <TextInput type="text" value="" placeholder="email" label=""/>
          <TextInput type="text" value="" placeholder="phone" label=""/>
        </div>
        <TextInput type="text" value="" placeholder="street" label=""/>
        <div id="personalInfo_form_address" className="flex flex-row">
          <TextInput type="text" value="" placeholder="postcode" label=""/>
          <TextInput type="text" value="" placeholder="city" label=""/>
          <TextInput type="text" value="" placeholder="country" label=""/>
        </div>
      </form>
      <Buttons/>
    </div>
  );
}