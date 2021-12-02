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
      case 'CERTIFICATES':
        return <Certificate/>
      case 'EDUCATION':
        return <Education/>
      case 'LANGUAGES':
        return <Language/>
      case 'SKILLS':
        return <Skills/>
      case 'WORK EXPERIENCE':
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