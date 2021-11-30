import { PersonalDetails } from '../../interfaces/CategoriesInterface';

export interface PersonalDetailsState {
  personal_details: PersonalDetails;
  loading: boolean;
  error: string | null;
}

export interface PersonalDetailsAction {
  type: string;
  payload?: string;
  id?: string;
}
