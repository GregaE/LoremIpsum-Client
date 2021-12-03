import React from 'react';
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import Certificate from '../../../Forms/Certificate';
import Education from '../../../Forms/Education';
import Language from '../../../Forms/Language';
import Skills from '../../../Forms/Skills';
import WorkExperience from '../../../Forms/WorkExperience';

export default function ItemEditor() {

  const {identifier} = useTypedSelector((state)=> state.toggleModal)

  // const categories:string[] = ['CERTIFICATES','EDUCATION','LANGUAGES','SKILLS','WORK EXPERIENCE'];

  const modalForm = () => {
    switch (identifier) {
      case 'Certificates':
        return <Certificate/>
      case 'Education':
        return <Education/>
      case 'Languages':
        return <Language/>
      case 'Skills':
        return <Skills/>
      case 'Work Experience':
        return <WorkExperience/>
      default:
        return null;
    }
  }

  return (
    <div>
      {modalForm()}
    </div>
  );
}