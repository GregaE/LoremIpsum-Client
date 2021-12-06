import { Forms } from '../../../../utils/ElementLookup';
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import Certificate from '../../../Forms/Certificate';
import EducationForm from '../../../Forms/Education';
import Language from '../../../Forms/Language';
import Skills from '../../../Forms/Skills';
import WorkExperience from '../../../Forms/WorkExperience';
import PersonalInfo from '../../../Forms/PersonalInfo'

export default function ItemEditor() {
  const { identifier } = useTypedSelector(state => state.toggleModal);

  //@ts-ignore => ignore for now need to solve types
  return <div className="w-full">{Forms[identifier]()}</div>;
}
