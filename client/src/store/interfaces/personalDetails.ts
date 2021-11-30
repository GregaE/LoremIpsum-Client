export interface PersonalDetails {
  id: string;
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
}
 export interface PersonalDetailsState {
   personal_details: PersonalDetails;
   loading: boolean;
   error: string | null;
}

export interface PersonalDetailsAction {
  type: string;
  payload?: string;
  id?: string;
}
