import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import { Languages } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';
import { useHandleForm } from '../../utils/CustomHooks';

export default function Language() {
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
  //@ts-ignore
  const language: Languages = { ...state };

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput
          callback={handleForm}
          label="Language"
          type="text"
          name="language_name"
          value={language.language_name}
          placeholder="Enter language"
        />
        <SelectInput
          options={languages}
          value={language.level ? language.level : ''}
        />
        <div className="flex flex-row">
          <Button name="Cancel" callback={() => toggle(false, '')} />
          <Button
            name="Edit"
            callback={handleSubmit}
            handleSubmitType="UPDATE"
          />
          <Button
            name="Create"
            callback={handleSubmit}
            handleSubmitType="NEW"
          />
        </div>
      </form>
    </div>
  );
}
