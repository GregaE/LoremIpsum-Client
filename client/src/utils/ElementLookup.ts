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
