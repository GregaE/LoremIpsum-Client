import TextInput from './Elements/Inputs/TextInput';
import TextAreaInput from './Elements/Inputs/TextAreaInput';
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
    <div className="justify-center object-center m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <h3>Add new Skill</h3>
      <form>
        <TextInput
          type="text"
          value={skill.name}
          placeholder="Skill"
          name="name"
          callback={handleForm}
          label="Skill"
        />
        <TextAreaInput
          type="text"
          value={skill.description ? skill.description : ''}
          length={300}
          cols={100}
          rows={4}
          placeholder="Description of your skill"
          name="description"
          callback={handleForm}
          label="Description"
        />
      </form>
      <div className="flex flex-row my-5 gap-2.5">
        <Button name="Cancel" callback={() => toggle(false, '')} />
        <Button name="Edit" callback={handleSubmit} handleSubmitType="UPDATE" />
        <Button name="Create" callback={handleSubmit} handleSubmitType="NEW" />
      </div>
    </div>
  );
}
