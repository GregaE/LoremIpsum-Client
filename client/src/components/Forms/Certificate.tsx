import TextInput from './Elements/Inputs/TextInput';
import TextAreaInput from './Elements/Inputs/TextAreaInput';
import Button from './Elements/Buttons/Button';
import { Certificates } from '../../interfaces/CategoriesInterface';
import { useHandleForm } from '../../utils/CustomHooks';

export default function Certificate() {
  const initialState: Certificates = {
    name: '',
    description: '',
    userId: '',
  };
  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/certificates',
    initialState,
    'POST_CERTIFICATE',
    'UPDATE_CERTIFICATE'
  );
  //@ts-ignore => handle type once solved
  const certificate: Certificates = { ...state };

  return (
    <div className="object-center m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <h3>Add new certificate</h3>
      <form>
        <TextInput
          callback={handleForm}
          type="text"
          name="name"
          value={certificate.name}
          placeholder="Certificate name"
          label="Certificate"
        />
        <TextAreaInput
          callback={e => handleForm(e)}
          type="text"
          name="description"
          value={certificate.description ? certificate.description : ''}
          length={300}
          cols={100}
          rows={4}
          placeholder="Details of your certificate"
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
