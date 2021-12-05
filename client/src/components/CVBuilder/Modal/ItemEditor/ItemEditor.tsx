import { Forms } from '../../../../utils/ElementLookup';
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import Certificate from '../../../Forms/Certificate';
import EducationForm from '../../../Forms/Education';
import Language from '../../../Forms/Language';
import Skills from '../../../Forms/Skills';
import WorkExperience from '../../../Forms/WorkExperience';

export default function ItemEditor() {
  const { identifier } = useTypedSelector(state => state.toggleModal);

  // const categories:string[] = ['CERTIFICATES','EDUCATION','LANGUAGES','SKILLS','WORK EXPERIENCE'];

  const modalForm = () => {
    switch (identifier) {
      case 'Certificates':
        return <Certificate />;
      case 'Education':
        return <EducationForm />;
      case 'Languages':
        return <Language />;
      case 'Skills':
        return <Skills />;
      case 'Work Experience':
        return <WorkExperience />;
      default:
        return null;
    }
  }; //@ts-ignore => ignore for now need to solve types
  return <div className="w-full">{Forms[identifier]()}</div>;
}
