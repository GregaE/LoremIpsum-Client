import TextInput from './Elements/Inputs/TextInput';
import { Skill } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';
import { useHandleForm } from '../../utils/CustomHooks';

export default function Skills() {
  const initialState: Skill = {
    id: '',
    name: '',
    description: '',
    userId: '',
  };

  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/skills',
    initialState,
    'POST_SKILL',
    'UPDATE_SKILL'
  );
  //@ts-ignore => this is annoying how can I define one of the types if its or?
  const skill: Skill = { ...state };
  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput
          type="text"
          value={skill.name}
          placeholder="skills"
          label=""
          name="name"
          callback={handleForm}
        />
        <TextInput
          type="text"
          value={skill.description ? skill.description : ''}
          placeholder="sub-skill"
          label=""
          name="description"
          callback={handleForm}
        />
      </form>
      <div className="flex flex-row">
        <Button name="Cancel" callback={() => toggle(false, '')} />
        <Button name="Edit" callback={handleSubmit} handleSubmitType="UPDATE" />
        <Button name="Create" callback={handleSubmit} handleSubmitType="NEW" />
      </div>
    </div>
  );
}
