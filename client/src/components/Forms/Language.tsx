import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import { Languages } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';
import { useHandleForm } from '../../utils/CustomHooks';

export default function Language({ recordType }: { recordType: string }) {
  const languages = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const initialState: Languages = {
    id: '',
    language_name: '',
    level: '',
    userId: '',
  };

  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/languages',
    initialState,
    'POST_LANGUAGE',
    'UPDATE_LANGUAGE'
  );

  const language = { ...(state as Languages) };

  return (
    <div className="object-center m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <h3>Add Language</h3>
      <form>
        <div>
          <TextInput
            callback={handleForm}
            label="Language"
            type="text"
            name="language_name"
            value={language.language_name}
            placeholder="Enter language"
          />
        </div>
        <div className="flex justify-start">
          <SelectInput
            options={languages}
            callback={handleForm}
            name="level"
            value={language.level}
            default={'Enter Level'}
          />
        </div>
        <div className="flex flex-row my-5 gap-2.5">
          <Button name="Cancel" callback={() => toggle(false, '')} />
          <Button
            name={recordType === 'NEW' ? 'Create' : 'Edit'}
            callback={() => handleSubmit(recordType)}
          />
        </div>
      </form>
    </div>
  );
}
