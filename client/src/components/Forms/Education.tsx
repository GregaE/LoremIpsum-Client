import Button from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import { Education } from '../../interfaces/CategoriesInterface';
import { useHandleForm } from '../../utils/CustomHooks';

export default function EducationForm() {
  const initialState: Education = {
    degree: '',
    school: '',
    city: '',
    country: '',
    beginMonth: '',
    beginYear: '',
    endMonth: '',
    endYear: '',
  };
  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/education',
    initialState,
    'POST_EDUCATION',
    'UPDATE_EDUCATION'
  );
  //@ts-ignore => this is annoying how can I define one of the types if its or?
  const education: Education = { ...state };

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

  return (
    <div className="m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <h3>Add Education</h3>
      <form>
        <TextInput
          callback={handleForm}
          type="text"
          name="degree"
          value={education.degree}
          placeholder="Degree/Field Of Study"
          label="Degree"
        />
        <TextInput
          callback={handleForm}
          type="text"
          name="school"
          value={education.school}
          placeholder="School/University"
          label="School/University"
        />
        <div
          id="education_form_location"
          className="md:flex gap-5 items-center"
        >
          <TextInput
            callback={handleForm}
            type="text"
            name="city"
            value={education.city ? education.city : ''}
            placeholder="City"
            label="City"
          />
          <TextInput
            callback={handleForm}
            type="text"
            name="country"
            value={education.country ? education.country : ''}
            placeholder="Country"
            label="Country"
          />
        </div>
        <div id="education_form_dates" className="flex flex-row gap-2 my-5">
          <SelectInput
            callback={handleForm}
            value={education.beginMonth}
            name="beginMonth"
            options={months}
            default={'Month'}
          />
          <SelectInput
            callback={handleForm}
            value={education.beginYear}
            name="beginYear"
            options={years}
            default={'Year'}
          />
          <SelectInput
            callback={handleForm}
            value={education.endMonth}
            name="endMonth"
            options={months}
            default={'Month'}
          />
          <SelectInput
            callback={handleForm}
            value={education.endYear}
            name="endYear"
            options={years}
            default={'Year'}
          />
        </div>
      </form>
      <div className="flex flex-row my-5 gap-2.5">
        <Button name="Cancel" callback={() => toggle(false, '')} />
        <Button name="Edit" callback={handleSubmit} handleSubmitType="UPDATE" />
        <Button name="Create" callback={handleSubmit} handleSubmitType="NEW" />
      </div>
    </div>
  );
}
