import { Certificates } from '../../interfaces/CategoriesInterface';

export interface CertificateState {
  certificates: Certificates[]
  loading: boolean;
  error: string | null;
}

export interface CertificateAction {
  type: string;
  payload?: Certificates;
  id?: string;
}
