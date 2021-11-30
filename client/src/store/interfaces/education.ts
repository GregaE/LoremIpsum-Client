export interface Education {
  id: string;
  degree: string;
  school: string;
  city?: string;
  country?: string;
  start_date?: string | Date;
  end_date?: string | Date;
  description?: string;
}

export interface EducationState {
  education: Education[];
  loading: boolean;
  error: null;
}

export interface EducationAction {
  type: string;
  payload?: Education;
  id?: string;
}