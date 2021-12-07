import { CV } from '../../interfaces/CategoriesInterface';

export interface CVState {
  cvs: CV[];
  loading: boolean;
  error: string | null;
}

export interface CVAction {
  type: string;
  payload: CV & CV[];
  id?: string;
  error: string | null;
}
