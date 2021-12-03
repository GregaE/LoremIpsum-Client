export interface Skill {
  id?: string;
  name: string;
  description?: string;
  userId?: string;
}

export interface Certificates {
  id?: string;
  name: string;
  description?: string;
  userId?: string;
}

export interface WorkExperience {
  id?: string;
  job_title: string;
  company?: string;
  city?: string;
  country?: string;
  beginMonth?: string;
  beginYear?: string;
  endMonth?: string;
  endYear?: string;
  description?: string;
  userId?: string;
}

export interface Languages {
  id?: string;
  language_name: string;
  level?: string;
  userId?: string;
}

export interface Education {
  id?: string;
  degree: string;
  school: string;
  city?: string;
  country?: string;
  beginMonth?: string;
  beginYear?: string;
  endMonth?: string;
  endYear?: string;
  description?: string;
  userId?: string;
}

export interface PersonalDetails {
  id?: string;
  email?: string;
  phone_number?: string;
  image?: string;
  first_name: string;
  last_name?: string;
  street?: string;
  postcode?: string;
  city?: string;
  country?: string;
  headline?: string;
  userId?: string;
}

export interface CV {
  id: string;
  userId: string;
  saved_cv: string;
  date_created: Date;
}

export interface PDF {
  name: string;
  items: Categories[];
}

export type Categories = Skill &
  Education &
  WorkExperience &
  Languages &
  Certificates;
