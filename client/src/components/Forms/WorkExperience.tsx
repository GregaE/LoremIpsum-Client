import React from 'react';
import Buttons from './Elements/Buttons/Buttons';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
// import { Link } from 'react-router-dom';

export default function WorkExperience() {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = Array.from({length: 20}, (v, i) => i+2000); //Generate and array with values from 2000 to 2020

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput type="text" value="" placeholder="job-title" label=""/>
        <TextInput type="text" value="" placeholder="employer" label=""/>
        <div id="work_form_location" className="flex flex-row">
          <TextInput type="text" value="" placeholder="city" label=""/>
          <TextInput type="text" value="" placeholder="country" label=""/>
        </div>
        <div id="work_form_dates" className="flex flex-row">
          <SelectInput options={months}/>
          <SelectInput options={years}/>
          <SelectInput options={months}/>
          <SelectInput options={years}/>
        </div>
      </form>
      <Buttons/>
    </div>
  );
}