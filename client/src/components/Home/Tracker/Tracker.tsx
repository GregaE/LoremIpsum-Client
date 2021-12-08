import { useTypedSelector } from '../../../utils/useTypeSelector';
import { useDispatch } from 'react-redux';
export default function Tracker() {
  const interviews = useTypedSelector(state => state.interviews);

  const upcomingInterviews = interviews
    .filter(int => new Date(int.date) > new Date())
    .sort(
      (a, b) =>
        Date.parse(new Date(a.date).toDateString()) -
        Date.parse(new Date(b.date).toDateString())
    )
    .map(interview => {
      if (interviews.length > 0) {
        return (
          <p
            key={interview.id}
            className="w-5/6 bg-primary-bg rounded-full my-2 py-3"
          >
            {`Your next interview is with ${
              interview.company
            } for the position ${interview.position} on ${new Date(
              interview.date
            ).toDateString()}. Good luck!`}
          </p>
        );
      }
    });

  return (
    <div
      id=""
      className="w-5/6 h-1/2 flex flex-col bg-primary rounded-lg self-center items-center mb-16 overflow-auto gap-4 text-center"
    >
      {' '}
      {/* I can change h to h-1/2 */}
      <h1>Recruitment Progress</h1>
      {upcomingInterviews ? (
        upcomingInterviews
      ) : (
        <p className="w-5/6 bg-primary-bg rounded-full my-2 py-3">
          You don't have any scheduled interviews
        </p>
      )}
    </div>
  );
}
