import React from 'react';
import Buttons from './Elements/Buttons/Buttons';
import TextInput from './Elements/Inputs/TextInput';

export default function Certificate() {

  return (
    <div className="object-center w-1/2 h-auto bg-primary">
      <form>
        <TextInput type="text" value="" placeholder="HelloInput" label="HelloInput"/>
        <TextInput type="text" value="" placeholder="WorldInput" label="WorldInput"/>
      </form>
      <Buttons/>
    </div>
  );
}