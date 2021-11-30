import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarComp() {
  const [value, onChange] = useState(new Date());
  /*
  Nothing yet but we will fetch data from user
  */

  return (
    <div id="" className="w-full h-1/2 p-4 flex justify-center content-center">
      <div className="w-96 h-96 my-auto justify-center">
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
    </div>
  );
}