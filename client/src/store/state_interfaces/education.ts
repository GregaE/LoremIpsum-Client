import { Education } from '../../interfaces/CategoriesInterface';

export interface EducationState {
  education: Education[];
  loading: boolean;
  error: null;
}

export interface EducationAction {
  type: string;
  payload?: Education;
  id?: string;
}
