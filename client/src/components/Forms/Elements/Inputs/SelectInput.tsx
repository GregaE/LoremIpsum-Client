import React from 'react';
import { SelectInputProps } from '../../../../interfaces/SelectInputProps';

export default function SelectInput(props: SelectInputProps) {
  const options = props.options.map(option => (
    <option value={option}>{option}</option>
  ));

  return (
    <div className="w-auto flex flex-col my-auto">
      {props.label && (
        <label className="font-medium leading-none text-left text-light">
          {props.label}
        </label>
      )}
      <select
        onChange={e => props.callback && props.callback(e)}
        {...props}
        className="leading-none text-dark p-3 bg-primary-bg border-primary-bg rounded focus:outline-none focus:border focus:ring-2 focus:ring-primary min-w-0"
      >
        <option value="" disabled>
          {props.default}
        </option>
        {options}
      </select>
    </div>
  );
}
