import React from 'react';

export default function CVItem() {

  /*
  Every CV could recive the whole data of cvs as props or just send an identifier as prop from parent
  And get the data from cvs state and just Array.find(CV Identifier)
  */

  return ( 
    <div className="bg-light w-80 h-96 flex justify-center items-end shadow-lg">
      <p className="p-10" >CV Item</p>
    </div>
  );
}