import TextInput from './Elements/Inputs/TextInput';
import TextAreaInput from './Elements/Inputs/TextAreaInput';
import { Skill } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';
import { useHandleForm } from '../../utils/CustomHooks';
import { useTypedSelector } from '../../utils/useTypeSelector';

export default function Skills({
  recordType,
  id,
}: {
  recordType: string;
  id: string;
}) {
  const {
    skills: { skills },
  } = useTypedSelector(state => state);

  const setInitialState = (): Skill => {
    const skill = skills.find(skill => skill.id === id);
    const emptySkill = {
      id: '',
      name: '',
      description: '',
      userId: '',
    };
    return skill ? skill : emptySkill;
  };

  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/skills',
    setInitialState(),
    'POST_SKILL',
    'UPDATE_SKILL'
  );
  //@ts-ignore => this is annoying how can I define one of the types if its or?
  const skill: Skill = { ...state };
  return (
    <div className="object-center m-auto text-center w-auto h-auto bg-primary rounded-lg">
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
          // length={300}
          // cols={100}
          // rows={4}
          placeholder="Description of your skill"
          name="description"
          callback={handleForm}
          label="Description"
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
