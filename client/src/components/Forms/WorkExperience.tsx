import React, { useState } from 'react';
import Buttons from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import { WorkExperience } from '../../interfaces/CategoriesInterface';

export default function WorkExperienceForm() {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = Array.from({length: 20}, (v, i) => i+2000); //Generate and array with values from 2000 to 2020

//TODO: ADD the date formatter for the db when handling submit button to convert string to a date - possibly let the server handle that
  const experience: WorkExperience = {
    id:'',
    job_title: '',
    company: '',
    city: '',
    country: '',
    description: '',
    beginMonth: '',
    beginYear: '',
    endMonth: '',
    endYear: '',
  }

  const [workExperience, setWorkExperience] = useState(experience)

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setWorkExperience({...workExperience, [target.name]: target.value})
  }

  return (
    <div className='object-center w-1/2 h-auto bg-green-400'>
      <form>
        <TextInput type='text' name='job_title' value={workExperience.job_title} placeholder='job-title' label=''/>
        <TextInput type='text' name='company' value={workExperience.company? workExperience.company: ''} placeholder='employer' label=''/>
        <div id='work_form_location' className='flex flex-row'>
          <TextInput type='text' value={workExperience.city? workExperience.city: ''} placeholder='city' name='city' label=''/>
          <TextInput type='text' value={workExperience.country? workExperience.country: ''} placeholder='country' name='country' label=''/>
        </div>
        <div id='work_form_dates' className='flex flex-row'>
          <SelectInput options={months} callback={handleForm} name='beginMonth' value={workExperience.beginMonth? workExperience.beginMonth: ''}/>
          <SelectInput options={years} callback={handleForm} name='beginYear' value={workExperience.beginYear? workExperience.beginYear: ''}/>
          <SelectInput options={months} callback={handleForm} name='endMonth' value={workExperience.endMonth? workExperience.endMonth: ''}/>
          <SelectInput options={years} callback={handleForm} name='endMonth' value={workExperience.endYear? workExperience.endYear: ''}/>
        </div>
      </form>
      <Buttons/>
    </div>
  );
}