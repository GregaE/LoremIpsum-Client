export interface Certificate {
  id: string;
  name: string;
  description?: string;
}

export interface CertificateState {
  certificates: Certificate[];
  loading: true;
  error: string | null;
}

export interface CertificateAction {
  type: string;
  payload?: Certificate;
  id?: string;
}