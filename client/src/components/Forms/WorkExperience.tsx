import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import { WorkExperience } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';
import { useHandleForm } from '../../utils/CustomHooks';

export default function WorkExperienceForm() {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const years = Array.from({ length: 20 }, (v, i) => i + 2000); //Generate and array with values from 2000 to 2020

  const initialState: WorkExperience = {
    id: '',
    job_title: '',
    company: '',
    city: '',
    country: '',
    description: '',
    beginMonth: '',
    beginYear: '',
    endMonth: '',
    endYear: '',
  };

  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/workExperience',
    initialState,
    'POST_EXPERIENCE',
    'UPDATE_EXPERIENCE'
  );
  //@ts-ignore => this is annoying how can I define one of the types if its or?
  const workExperience: WorkExperience = { ...state };

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput
          type="text"
          name="job_title"
          value={workExperience.job_title}
          placeholder="job-title"
          label=""
          callback={handleForm}
        />
        <TextInput
          type="text"
          name="company"
          value={workExperience.company ? workExperience.company : ''}
          placeholder="employer"
          label=""
          callback={handleForm}
        />
        <div id="work_form_location" className="flex flex-row">
          <TextInput
            type="text"
            name="city"
            value={workExperience.city ? workExperience.city : ''}
            placeholder="city"
            label=""
            callback={handleForm}
          />
          <TextInput
            type="text"
            name="country"
            value={workExperience.country ? workExperience.country : ''}
            placeholder="country"
            label=""
            callback={handleForm}
          />
        </div>
        <div id="work_form_dates" className="flex flex-row">
          <SelectInput
            options={months}
            callback={handleForm}
            name="beginMonth"
            value={workExperience.beginMonth ? workExperience.beginMonth : ''}
          />
          <SelectInput
            options={years}
            callback={handleForm}
            name="beginYear"
            value={workExperience.beginYear ? workExperience.beginYear : ''}
          />
          <SelectInput
            options={months}
            callback={handleForm}
            name="endMonth"
            value={workExperience.endMonth ? workExperience.endMonth : ''}
          />
          <SelectInput
            options={years}
            callback={handleForm}
            name="endMonth"
            value={workExperience.endYear ? workExperience.endYear : ''}
          />
        </div>
      </form>
      <div className="flex flex-row">
        <Button name="Cancel" callback={() => toggle(false, '')} />
        <Button name="Edit" callback={handleSubmit} handleSubmitType="UPDATE" />
        <Button name="Create" callback={handleSubmit} handleSubmitType="NEW" />
      </div>
    </div>
  );
}
