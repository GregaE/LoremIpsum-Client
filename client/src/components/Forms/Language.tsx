import React, { useState } from 'react';
import Buttons from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';

import { Languages } from '../../interfaces/CategoriesInterface';
import { useTypedSelector } from '../../utils/useTypeSelector'

export default function Language() {

  const languages = ['A1', 'A2', 'B1', "B2", "C1", "C2"];

  const initialState: Languages = {
    id: '',
    language_name: '',
    level: '',
    userId: ''
  };

  const [language, setLanguage] = useState(initialState);

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setLanguage({...language, [target.name]: target.value})
  }

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput callback={handleForm} label="Language" type="text" value={language.language_name} placeholder="Enter language"/>
        <SelectInput options={languages} value={language.level ? language.level : ''}/>
        <Buttons/>
      </form>
    </div>
  );
}

