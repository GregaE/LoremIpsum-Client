import React from 'react';
import Buttons from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';

export default function Language() {

  const languages = ['A1', 'A2', 'B1', "B2", "C1", "C2"];

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput label="Language" type="text" value="" placeholder="Enter language"/>
        <SelectInput options={languages}/>
        <Buttons/>
      </form>
    </div>
  );
}

