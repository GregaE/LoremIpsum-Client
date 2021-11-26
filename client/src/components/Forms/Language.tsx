import React from 'react';
import Buttons from './Elements/Buttons/Buttons';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';

export default function Language() {

  return (
    <div>
      <form>
        <TextInput label="Language" type="text" value="" placeholder="Enter language"/>
        <SelectInput/>
        <Buttons/>
      </form>
    </div>
  );
}

