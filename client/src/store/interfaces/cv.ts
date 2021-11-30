import { CV } from '../../interfaces/CategoriesInterface';

export interface CVState {
  cvs: CV[];
  loading: boolean;
  error: null;
}

export interface CVAction {
  type: string;
  payload?: CV;
  id?: string;
}