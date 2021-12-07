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
  Certificates: ({ recordType }: { recordType: string }) => JSX.Element;
  Education: ({ recordType }: { recordType: string }) => JSX.Element;
  Languages: ({ recordType }: { recordType: string }) => JSX.Element;
  Skills: ({ recordType }: { recordType: string }) => JSX.Element;
  'Work Experience': ({ recordType }: { recordType: string }) => JSX.Element;
}

export type formKey = keyof FormInterface;

export const categoriesLookup: {
  name: string;
  icon: string;
  endpoint: string;
  dispatch: string;
}[] = [
  {
    name: 'Education',
    icon: 'fas fa-user-graduate',
    endpoint: '/education',
    dispatch: 'ALL_EDUCATION',
  },
  {
    name: 'Work Experience',
    icon: 'fas fa-suitcase',
    endpoint: '/workExperience',
    dispatch: 'ALL_EXPERIENCES',
  },
  {
    name: 'Skills',
    icon: 'fas fa-toolbox',
    endpoint: '/skills',
    dispatch: 'ALL_SKILLS',
  },
  {
    name: 'Languages',
    icon: 'fas fa-globe-americas',
    endpoint: '/languages',
    dispatch: 'ALL_LANGUAGES',
  },
  {
    name: 'Certificates',
    icon: 'fas fa-award',
    endpoint: '/certificates',
    dispatch: 'ALL_CERTIFICATES',
  },
];
