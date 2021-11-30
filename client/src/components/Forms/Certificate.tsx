import React from 'react';
import Buttons from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';

import { useTypedSelector } from '../../utils/useTypeSelector'
import { useDispatch } from 'react-redux';
import { formCertificate, formCertificateAditional} from '../../redux/AppState/actionCreators/formCertificate'

export default function Certificate() {

  const dispatch = useDispatch();
  const {name, aditional} = useTypedSelector((state) => state.formCertificate)
  //  onChange={(e: { target: { value: string; }; }) => dispatch(formCertificate(e.target.value))} Should adapt the onChange to the react component...
  // onChange={(e: { target: { value: string; }; }) => dispatch(formCertificateAditional(e.target.value))}

  const myFunction1 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(formCertificate(target.value))
  }

  const myFunction2 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(formCertificateAditional(target.value))
  }

  return (
    <div className="object-center m-auto text-center w-1/2 h-auto bg-primary rounded-lg">
      <p className="text-light my-8">Add new certificate</p>
      <form>
        <TextInput callback={myFunction1}
          type="text" value={name} placeholder="HelloInput" label="HelloInput"/>
        <TextInput callback={myFunction2}
          type="text" value={aditional} placeholder="WorldInput" label="WorldInput"/>
      </form>
      <Buttons/>
    </div>
  );
}