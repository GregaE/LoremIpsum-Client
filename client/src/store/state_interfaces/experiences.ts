import { WorkExperience } from '../../interfaces/CategoriesInterface';

export interface WorkExperienceState {
  experience: WorkExperience[];
  loading: boolean;
  error: string | null;
}

export interface WorkExperienceAction {
  type: string;
  payload: WorkExperience & WorkExperience[];
  error: string | null;
  id?: string;
}
