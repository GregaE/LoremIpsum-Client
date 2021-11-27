import React from 'react';
import {ButtonProps} from '../../../../interfaces/ButtonProps';

export default function Button({name} : ButtonProps) {
  
  return (
    <div className="btn-container flex flex-row p-2">
      <button className="btn">{name}</button>
    </div>
  );
}