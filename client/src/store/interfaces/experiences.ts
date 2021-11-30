export interface WorkExperience {
  id: string;
  job_title: string;
  company?: string;
  city?: string;
  country?: string;
  start_date?: string | Date;
  end_date?: string | Date;
  description?: string;
}

export interface WorkExperienceState {
  experience: WorkExperience[];
  loading: boolean;
  error: string | null;
}

export interface WorkExperienceAction {
  type: string;
  payload?: WorkExperience;
  id?: string;
}