import React, { useState } from 'react';
import Button from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';

import { useTypedSelector } from '../../utils/useTypeSelector'

export default function Education() {

  interface formState {
    degree: string;
    school: string;
    city: string;
    country: string;
    beginMonth: string;
    beginYear: string;
    endMonth: string;
    endYear: string;
  }

  const initialState: formState = {
    degree: '',
    school: '',
    city: '',
    country: '',
    beginMonth: '',
    beginYear: '',
    endMonth: '',
    endYear: '',
  };

  const [education, setEducation] = useState(initialState);

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setEducation({...education, [target.name]: target.value})
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const years = Array.from({length: 20}, (v, i) => i+2000); //Generate and array with values from 2000 to 2020
  
  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput callback={handleForm}
          type="text" name="degree" value={education.degree} placeholder="degree" label=""/>
        <TextInput callback={handleForm}
          type="text" name="school" value={education.school} placeholder="school" label=""/>
        <div id="education_form_location" className="flex flex-row">
          <TextInput callback={handleForm}
            type="text" name="city" value={education.city} placeholder="city" label=""/>
          <TextInput callback={handleForm}
            type="text" name="country" value={education.country} placeholder="country" label=""/>
        </div>
        <div id="education_form_dates" className="flex flex-row">
          <SelectInput callback={handleForm} value={education.beginMonth}
            name="beginMonth" options={months} />
          <SelectInput callback={handleForm} value={education.beginYear}
            name="beginYear" options={years}/>
          <SelectInput callback={handleForm} value={education.endMonth}
            name="endMonth" options={months}/>
          <SelectInput callback={handleForm} value={education.endYear}
            name="endYear" options={years}/>
        </div>
      </form>
      <Button/>
    </div>
  );
}