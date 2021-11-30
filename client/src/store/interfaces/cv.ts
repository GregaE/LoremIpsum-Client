export interface CV {
  id: string;
  saved_cv: string;
  date_created: string | Date;
}

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