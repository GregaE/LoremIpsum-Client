import React from 'react';
import {SelectInputProps} from '../../../../interfaces/SelectInputProps';

export default function SelectInput(props: SelectInputProps ) {

  const options = props.options.map(option => <option value={option}>{option}</option>)

  return (
    <div>
      <select {...props}>
        {options}
      </select>
    </div>
  );
}