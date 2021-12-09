import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import { Languages } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';
import { useHandleForm } from '../../utils/CustomHooks';
import { useTypedSelector } from '../../utils/useTypeSelector';

export default function Language({
  recordType,
  id,
}: {
  recordType: string;
  id: string;
}) {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const {
    languages: { languages },
  } = useTypedSelector(state => state);

  const setInitialState = (): Languages => {
    const language = languages.find(language => language.id === id);
    const emptyLanguage = {
      id: '',
      language_name: '',
      level: '',
      userId: '',
    };
    return language ? language : emptyLanguage;
  };

  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/languages',
    setInitialState(),
    'POST_LANGUAGE',
    'UPDATE_LANGUAGE'
  );

  const language = { ...(state as Languages) };

  return (
    <div className="object-center m-auto text-center w-auto h-auto bg-primary rounded-lg">
      <h3>Add Language</h3>
      <form>
        <div>
          <TextInput
            callback={handleForm}
            // label="Language"
            type="text"
            name="language_name"
            value={language.language_name}
            placeholder="Enter language"
          />
        </div>
        <div className="flex justify-start mt-6">
          <SelectInput
            options={levels}
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
            callback={() => handleSubmit(recordType, id)}
          />
        </div>
      </form>
    </div>
  );
}
