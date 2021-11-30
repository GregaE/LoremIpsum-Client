import React from 'react';
import Buttons from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';

import { useTypedSelector } from '../../utils/useTypeSelector'

export default function Skills() {

  return (


<div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput type="text" value="" placeholder="skills" label=""/>
        <TextInput type="text" value="" placeholder="sub-skill" label=""/>
      </form>
      <Buttons/>
    </div>
  );
}