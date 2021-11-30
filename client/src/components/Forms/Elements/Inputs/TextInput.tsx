import React from 'react';
import {TextInputProps} from '../../../../interfaces/InputTextProps'

export default function TextInput(props: TextInputProps ) {

  return (
    <div className="flex flex-col p-2">
      <label>{props.label}</label>
      <input 
        onChange={(e) => props.callback && props.callback(e)}
        {...props}></input>
    </div>
  );
}