export interface Skill {
  user_id: number;
  name: string;
  description: string;
}

export interface Certificates {
  user_id: number;
  name: string;
  description: string;
}

export interface WorkExperience {
  user_id: number;
  job_title: string;
  company: string;
  city: string;
  country: string;
  start_date: Date;
  end_date: Date;
  description: string;
}

export interface Languages {
  user_id: number;
  name: string;
  level: string;
}

export interface Education {
  user_id: number;
  degree: string;
  city: string;
  country: string;
  start_date: Date;
  end_date: Date;
  description: string;
}

export interface PersonalDetails {
  user_id: number;
  email: string;
  phone_number: string;
  image: string;
  first_name: string;
  last_name: string;
  street: string;
  postcode: string;
  city: string;
  country: string;
  headline: string;
}
