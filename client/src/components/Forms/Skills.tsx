import React, { useState } from 'react';
import Buttons from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';
import { Skill } from '../../interfaces/CategoriesInterface';

import { useTypedSelector } from '../../utils/useTypeSelector'

export default function Skills() {

  const initState: Skill = {
    id: '',
    name: '',
    description: '',
    userId: ''
  };
  const [skill, setSkill] = useState(initState);

  const handleForm = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setSkill({
      ...skill,
      [target.name]: target.value
    })
  }

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form >
        <TextInput type="text" value={skill.name} placeholder="skills" label="" name="name" callback={handleForm}/>
        <TextInput type="text" value={skill.description ? skill.description : ""} placeholder="sub-skill" label="" name="description" callback={handleForm}/>
      </form>
      <Buttons/>
    </div>
  );
}