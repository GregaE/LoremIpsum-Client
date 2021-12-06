import React from 'react';

export default function Tracker() {

  const temp: string|number[] = [1,2,3,4,5,6,7,8,9,10]
  const trackerList = temp.map(i => <p key={i} className="w-5/6 bg-primary-bg rounded-full my-2 py-3" >{i}</p>)

  /*
  Nothing yet but we will fetch data from user
  */

  return (
    <div id="" className="w-5/6 h-1/2 flex flex-col bg-primary rounded-lg self-center items-center mb-16 overflow-auto gap-4 text-center"> {/* I can change h to h-1/2 */}
      <h1>Recruitment Progress</h1>
      {trackerList}
    </div>
  );
}