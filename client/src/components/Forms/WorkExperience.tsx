import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import TextAreaInput from './Elements/Inputs/TextAreaInput';
import { WorkExperience } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';
import { useHandleForm } from '../../utils/CustomHooks';
import { useTypedSelector } from '../../utils/useTypeSelector';

export default function WorkExperienceForm({
  recordType,
  id
}: {
  recordType: string,
  id: string
}) {
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

  const {
    experience: { experience }
  } = useTypedSelector(state => state);


  const setInitialState = ():WorkExperience => {
    const experienceFiltered = experience.find(experience => 
      experience.id === id
    )
    const emptyExperience = {
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
    }
    return experienceFiltered ? experienceFiltered : emptyExperience
  }
  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/workExperience',
    setInitialState(),
    'POST_EXPERIENCE',
    'UPDATE_EXPERIENCE'
  );
  const workExp: WorkExperience = { ...(state as WorkExperience) };

  return (
    <div className="m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <h3>Add Work Experience</h3>
      <form>
        <TextInput
          type="text"
          name="job_title"
          value={workExp.job_title}
          placeholder="Job Title"
          label="Job Title"
          callback={handleForm}
        />
        <TextInput
          type="text"
          name="company"
          value={workExp.company ? workExp.company : ''}
          placeholder="Employer"
          label="Employer"
          callback={handleForm}
        />
        <div id="work_form_location" className="md:flex gap-5 items-center">
          <TextInput
            type="text"
            name="city"
            value={workExp.city ? workExp.city : ''}
            placeholder="City"
            label="City"
            callback={handleForm}
          />
          <TextInput
            type="text"
            name="country"
            value={workExp.country ? workExp.country : ''}
            placeholder="Country"
            label="Country"
            callback={handleForm}
          />
        </div>
        <div id="work_form_dates" className="flex flex-row gap-2 my-5">
          <SelectInput
            options={months}
            callback={handleForm}
            name="beginMonth"
            value={workExp.beginMonth ? workExp.beginMonth : ''}
            default={'Month'}
          />
          <SelectInput
            options={years}
            callback={handleForm}
            name="beginYear"
            value={workExp.beginYear ? workExp.beginYear : ''}
            default={'Year'}
          />
          <SelectInput
            options={months}
            callback={handleForm}
            name="endMonth"
            value={workExp.endMonth ? workExp.endMonth : ''}
            default={'Month'}
          />
          <SelectInput
            options={years}
            callback={handleForm}
            name="endYear"
            value={workExp.endYear ? workExp.endYear : ''}
            default={'Year'}
          />
        </div>
        <TextAreaInput
          type="text"
          name="description"
          value={workExp.description ? workExp.description : ''}
          placeholder=""
          label="Description"
          callback={handleForm}
        />
      </form>
      <div className="flex flex-row my-5 gap-2.5">
        <Button name="Cancel" callback={() => toggle(false, '')} />
        <Button
          name={recordType === 'NEW' ? 'Create' : 'Edit'}
          callback={() => handleSubmit(recordType, id)}
        />
      </div>
    </div>
  );
}
