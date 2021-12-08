import Certificate from '../components/Forms/Certificate';
import EducationForm from '../components/Forms/Education';
import Language from '../components/Forms/Language';
import Skills from '../components/Forms/Skills';
import WorkExperience from '../components/Forms/WorkExperience';

export const Forms: FormInterface = {
  Certificates: Certificate,
  Education: EducationForm,
  Languages: Language,
  Skills,
  'Work Experience': WorkExperience,
};

interface FormInterface {
  Certificates: ({ recordType, id }: { recordType: string, id: string }) => JSX.Element;
  Education: ({ recordType, id }: { recordType: string, id: string }) => JSX.Element;
  Languages: ({ recordType, id }: { recordType: string, id: string }) => JSX.Element;
  Skills: ({ recordType, id }: { recordType: string, id: string }) => JSX.Element;
  'Work Experience': ({ recordType, id }: { recordType: string, id: string }) => JSX.Element;
}

export type formKey = keyof FormInterface;

export const categoriesLookup: {
  name: string;
  icon: string;
  endpoint: string;
  dispatchAll: string;
  dispatchUpdate: string;
}[] = [
  {
    name: 'Education',
    icon: 'fas fa-user-graduate',
    endpoint: '/education',
    dispatchAll: 'ALL_EDUCATION',
    dispatchUpdate: 'UPDATE_EDUCATION'

  },
  {
    name: 'Work Experience',
    icon: 'fas fa-suitcase',
    endpoint: '/workExperience',
    dispatchAll: 'ALL_EXPERIENCES',
    dispatchUpdate: 'UPDATE_EXPERIENCES'
  },
  {
    name: 'Skills',
    icon: 'fas fa-toolbox',
    endpoint: '/skills',
    dispatchAll: 'ALL_SKILLS',
    dispatchUpdate: 'UPDATE_SKILLS'
  },
  {
    name: 'Languages',
    icon: 'fas fa-globe-americas',
    endpoint: '/languages',
    dispatchAll: 'ALL_LANGUAGES',
    dispatchUpdate: 'UPDATE_LANGUAGES'
  },
  {
    name: 'Certificates',
    icon: 'fas fa-award',
    endpoint: '/certificates',
    dispatchAll: 'ALL_CERTIFICATES',
    dispatchUpdate: 'UPDATE_CERTIFICATES'
  },
];
