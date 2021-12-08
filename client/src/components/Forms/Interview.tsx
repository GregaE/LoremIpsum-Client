import TextInput from './Elements/Inputs/TextInput';
import TextAreaInput from './Elements/Inputs/TextAreaInput';
import Button from './Elements/Buttons/Button';
import { useTypedSelector } from '../../utils/useTypeSelector';
import { useDispatch } from 'react-redux';
import { Interview } from '../../interfaces/CategoriesInterface';
import { useHandleForm } from '../../utils/CustomHooks';

export default function InterviewForm({
  recordType,
  id,
  date,
}: {
  recordType: string;
  id: string;
  date: Date;
}) {
  const initialForm = {
    id: '',
    date: date,
    position: '',
    company: '',
    link: '',
    notes: '',
  };

  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/interview',
    initialForm,
    'ADD_INTERVIEW',
    'EDIT_INTERVIEW'
  );
  const interview: Interview = { ...(state as Interview) };
  return (
    <div className="m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <h3>Upcoming Interview On {interview.date.toLocaleDateString()}</h3>
      <form>
        <TextInput
          type="text"
          name="position"
          value={interview.position}
          placeholder="Position"
          label="Position"
          callback={handleForm}
        />
        <TextInput
          type="text"
          name="company"
          value={interview.company}
          placeholder="Company"
          label="Company"
          callback={handleForm}
        />
        <TextInput
          type="text"
          name="link"
          value={interview.link}
          placeholder="Link"
          label="Link"
          callback={handleForm}
        />
        <TextAreaInput
          type="text"
          name="notes"
          value={interview.notes ? interview.notes : ''}
          placeholder=""
          label="Notes"
          callback={handleForm}
        />
      </form>
      <div className="flex flex-row my-5 gap-2.5">
        <Button name="Cancel" callback={() => toggle(false)} />
        <Button
          name={recordType === 'NEW' ? 'Schedule' : 'Edit'}
          callback={() => handleSubmit(recordType, id)}
        />
      </div>
    </div>
  );
}
