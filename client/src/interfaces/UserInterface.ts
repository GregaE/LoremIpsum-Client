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
  personal_details: PersonalDetails;
  skills: Skill[];
  education: Education[];
  certificates: Certificates[];
  work_experience: WorkExperience[];
  languages: Languages[];
}
