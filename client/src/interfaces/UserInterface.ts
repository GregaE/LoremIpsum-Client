import {
  Skill,
  Education,
  Certificates,
  WorkExperience,
  Languages,
  PersonalDetails,
} from './CategoriesInterface';
export interface User {
  user_id: number;
  username: string;
  email: string;
  personal_details: Partial<PersonalDetails>;
  session_id: string;
  skills: Partial<Skill>[];
  education: Partial<Education>[];
  certificates: Partial<Certificates>[];
  work_experience: Partial<WorkExperience>[];
  languages: Partial<Languages>[];
}
