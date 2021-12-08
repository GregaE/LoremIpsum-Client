import React, {useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';


export default function CalendarComp() {
  const [value, onChange] = useState(new Date());
  /*
  Nothing yet but we will fetch data from user
  */

  const mark = [
    '17-12-2021',
    '21-12-2021',
    '29-12-2021'
]

  return (
    <div id="" className="w-full h-1/2 p-4 flex justify-center content-center">
      <div className="w-96 h-96 my-auto justify-center">
      <Calendar
        className="rounded-3xl p-4"
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if(mark.find(x=>x===moment(date).format("DD-MM-YYYY"))){
           return 'bg-accent';
          }
          return null;
        }}
    
        tileDisabled={({ date }) => date.getDay() === 0}
    
      />
    </div>
    </div>
  );
}