import React from 'react';
import {TextInputProps} from '../../../../interfaces/InputTextProps'

export default function TextInput(props: TextInputProps ) {

  return (
    <div>
      <label>{props.label}</label>
      <input 
        onChange={props.callback}
        {...props}></input>
    </div>
  );
}