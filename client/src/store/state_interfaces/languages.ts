import { Languages } from '../../interfaces/CategoriesInterface';

export interface LanguageState {
  languages: Languages[];
  loading: boolean;
  error: string | null;
}

export interface LanguageAction {
  type: string;
  payload?: Languages[];
  id?: string;
}
