import React from 'react';
import Buttons from './Elements/Buttons/Buttons';
import TextInput from './Elements/Inputs/TextInput';

export default function Certificate() {

  return (
    <div>
      <form>
        <TextInput type="text" value="Hello" placeholder="foo" label="HelloInput"/>
        <TextInput type="text" value="World" placeholder="bar" label="WorldInput"/>
      </form>
      <Buttons/>
    </div>
  );
}