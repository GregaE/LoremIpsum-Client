import React from 'react';
import { TextInputProps } from '../../../../interfaces/InputTextProps';

export default function TextInput(props: TextInputProps) {
  return (
    <div className="w-full flex flex-col mt-8">
      <label className="font-medium leading-none text-left text-light">
        {props.label}
      </label>
      <input
        onChange={e => props.callback && props.callback(e)}
        {...props}
        className="leading-none text-dark p-3 mt-4 bg-primary-bg border-primary-bg rounded focus:outline-none focus:border focus:ring-2 focus:ring-primary"
      ></input>
    </div>
  );
}
