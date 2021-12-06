import { Languages } from '../../interfaces/CategoriesInterface';

export interface LanguageState {
  languages: Languages[];
  loading: boolean;
  error: string | null;
}

export interface LanguageAction {
  type: string;
  payload: Languages & Languages[];
  id?: string;
  error: string | null;
}
