//@ts-nocheck => Form component is hating the type needs refactor
import { Forms, formKey } from '../../../../utils/Lookups';
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import Certificate from '../../../Forms/Certificate';
import EducationForm from '../../../Forms/Education';
import Language from '../../../Forms/Language';
import Skills from '../../../Forms/Skills';
import WorkExperience from '../../../Forms/WorkExperience';
import PersonalInfo from '../../../Forms/PersonalInfo';

export default function ItemEditor() {
  const { identifier } = useTypedSelector(state => state.toggleModal);

  const selectForm = (formType: string) => {
    const formKey = formType as formKey;
    if (formType && Object.keys(Forms).includes(formType)) {
      return Forms[formKey];
    }
  };
  const FormComponent = selectForm(identifier);
  return (
    <div className="w-full">
      <FormComponent recordType="NEW" />
    </div>
  );
}
