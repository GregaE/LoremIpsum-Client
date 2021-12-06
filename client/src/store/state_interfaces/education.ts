import { Education } from '../../interfaces/CategoriesInterface';

export interface EducationState {
  education: Education[];
  loading: boolean;
  error: string | null;
}

export interface EducationAction {
  type: string;
  payload: Education & Education[];
  id?: string;
  error: string | null;
}
