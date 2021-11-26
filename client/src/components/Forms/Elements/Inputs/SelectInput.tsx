import React from 'react';
import {SelectInputProps} from '../../../../interfaces/SelectInputProps';

export default function SelectInput(props: SelectInputProps ) {

  return (
    <div>
      <select {...props}>
          {/* {
              options.map(option => {
                  <option value={option}>{option}</option>
              })
          } */}
      </select>
    </div>
  );
}