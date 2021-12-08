import { useTypedSelector } from '../../../utils/useTypeSelector';
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
          <div
            key={interview.id}
            className="w-5/6 bg-primary-bg rounded my-2 py-3 transform hover:scale-105 transition"
          >
            Your next interview is with <strong>{interview.company}</strong> for the position
            <strong> {interview.position}</strong> on
            <strong> {new Date(interview.date).toDateString()}</strong>.
            Good luck!
          </div>
        );
      }
    });

  return (
    <div
      id=""
      className="w-5/6 h-1/2 flex flex-col bg-primary rounded-lg self-center items-center my-5 overflow-auto gap-4 text-center"
    >
      {' '}
      {/* I can change h to h-1/2 */}
      <h3 className="mb-3">Recruitment Progress</h3>
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
