import TextInput from './Elements/Inputs/TextInput';
import TextAreaInput from './Elements/Inputs/TextAreaInput';
import Button from './Elements/Buttons/Button';
import { Certificates } from '../../interfaces/CategoriesInterface';
import { useHandleForm } from '../../utils/CustomHooks';
import { useTypedSelector } from '../../utils/useTypeSelector';

export default function Certificate({ recordType, id }: { recordType: string, id: string }) {

  const {
    certificates: { certificates }
  } = useTypedSelector(state => state);

  const setInitialState = ():Certificates => {
      const certificate = certificates.find(certificate => 
        certificate.id === id
      )
      const emptyCertificate = {
        name: '',
        description: '',
        userId: '',
      }
      return certificate ? certificate : emptyCertificate
  }

  const { state, handleForm, handleSubmit, toggle } = useHandleForm(
    '/certificates',
    setInitialState(),
    'POST_CERTIFICATE',
    'UPDATE_CERTIFICATE'
  );
  const certificate: Certificates = { ...(state as Certificates) };

  return (
    <div className="object-center m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <h3 className="underline">Add Certificate</h3>
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
        <Button
          name={recordType === 'NEW' ? 'Create' : 'Edit'}
          callback={() => handleSubmit(recordType, id)}
        />
      </div>
    </div>
  );
}
