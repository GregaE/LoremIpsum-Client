import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../store/actions/toggleModal';
import { useTypedSelector } from '../../../utils/useTypeSelector';


export default function CalendarComp() {
  const dispatch = useDispatch();
  const interviews = useTypedSelector(state => state.interviews);

  console.log(interviews);

  function calculateDate(date: Date) {
    return new Date(
      Date.parse(date.toUTCString()) - date.getTimezoneOffset() * 60000
    );
  }

  return (
    <div id="" className="w-full h-1/2 p-4 flex justify-center content-center">
      <div className="w-96 h-96 my-auto justify-center">
      <Calendar
        className="rounded-3xl p-4"
        tileClassName={({ date, view }) => {
          if(interviews.find(x=>moment(x.date).format("DD-MM-YYYY")===moment(date).format("DD-MM-YYYY"))){
           return 'bg-accent';
          }
          return null;
        }}
    
        tileDisabled={({ date }) => date.getDay() === 0}
        minDate={new Date()}
          onClickDay={selectedDate => {
            dispatch(
              toggleModal(
                true,
                'InterviewForm',
                '',
                calculateDate(selectedDate)
              )
            );
          }}
      />
    </div>
    </div>
  );
}
