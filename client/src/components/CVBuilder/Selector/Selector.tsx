import React from 'react';


export default function Selector() {

  return (
    <div className="flex flex-wrap gap-10 p-8">
      <div className="bg-light w-80 h-96 flex justify-center items-center rounded-xl shadow-lg">
        Create New
      </div>
      <div className="bg-light w-80 h-96 flex justify-center items-center rounded-xl shadow-lg">
        From Previous
      </div>
    </div>
  );
}