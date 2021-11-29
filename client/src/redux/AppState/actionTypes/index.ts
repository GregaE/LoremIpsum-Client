export enum ActionType {
  TOGGLE_LOGIN = 'TOGGLE_LOGIN',
  HEADER_NAME = 'HEADER_NAME',
  SHOW_CVBUILDER = 'SHOW_CVBUILDER',
  TOGGLE_MODAL = 'TOGGLE_MODAL',

  FORM_CERTIFICATE = 'FORM_CERTIFICATE',
  FORM_CERTIFICATE_ADITIONAL = 'FORM_CERTIFICATE_ADITIONAL',

  FORM_EDUCATION_DEGREE = 'FORM_EDUCATION_DEGREE',
  FORM_EDUCATION_SCHOOL = 'FORM_EDUCATION_SCHOOL',
  FORM_EDUCATION_CITY = 'FORM_EDUCATION_CITY',
  FORM_EDUCATION_COUNTRY = 'FORM_EDUCATION_COUNTRY',
  FORM_EDUCATION_BEGIN_MONTH = 'FORM_EDUCATION_BEGIN_MONTH',
  FORM_EDUCATION_BEGIN_YEAR = 'FORM_EDUCATION_BEGIN_YEAR',
  FORM_EDUCATION_END_MONTH = 'FORM_EDUCATION_END_MONTH',
  FORM_EDUCATION_END_YEAR = 'FORM_EDUCATION_END_YEAR',

  FORM_LANGUAGE = 'FORM_LANGUAGE',
  FORM_LANGUAGE_LEVEL = 'FORM_LANGUAGE_LEVEL',

  FORM_PERSONAL_FULLNAME = 'FORM_PERSONAL_FULLNAME',
  FORM_PERSONAL_EMAIL = 'FORM_PERSONAL_EMAIL',
  FORM_PERSONAL_PHONE = 'FORM_PERSONAL_PHONE',
  FORM_PERSONAL_ADDRESS = 'FORM_PERSONAL_ADDRESS',
  FORM_PERSONAL_POSTCODE = 'FORM_PERSONAL_POSTCODE',
  FORM_PERSONAL_CITY = 'FORM_PERSONAL_CITY',
  FORM_PERSONAL_COUNTRY = 'FORM_PERSONAL_COUNTRY',

  FORM_SKILLS = 'FORM_SKILL',
  FORM_SKILLS_ADITIONAL = 'FORM_SKILLS_ADITIONAL',

  FORM_JOBEXPERIENCE_TITLE = 'FORM_JOBEXPERIENCE_TITLE',
  FORM_JOBEXPERIENCE_EMPLOYER = 'FORM_JOBEXPERIENCE_EMPLOYER',
  FORM_JOBEXPERIENCE_CITY = 'FORM_JOBEXPERIENCE_CITY',
  FORM_JOBEXPERIENCE_COUNTRY = 'FORM_JOBEXPERIENCE_COUNTRY',
  FORM_JOBEXPERIENCE_BEGIN_MONTH = 'FORM_JOBEXPERIENCE_BEGIN_MONTH',
  FORM_JOBEXPERIENCE_BEGIN_YEAR = 'FORM_JOBEXPERIENCE_BEGIN_YEAR',
  FORM_JOBEXPERIENCE_END_MONTH = 'FORM_JOBEXPERIENCE_END_MONTH',
  FORM_JOBEXPERIENCE_END_YEAR = 'FORM_JOBEXPERIENCE_END_YEAR',
}

///////////////////////////////
/////// APP NAVIGATION ////////
///////////////////////////////
interface headerName {
  type: ActionType.HEADER_NAME;
  payload: string;
}
interface toggleLogin {
  type: ActionType.TOGGLE_LOGIN;
}
interface toggleModal {
  type: ActionType.TOGGLE_MODAL;
  payload: boolean;
}
interface showCvBuilder {
  type: ActionType.SHOW_CVBUILDER
  payload: boolean;
}


///////////////////////////////
//////////// FORMS ////////////
///////////////////////////////

/////// CERTIFICATES //////////
interface formCertificate {
  type: ActionType.FORM_CERTIFICATE
  payload: string;
}
interface formCertificateAditional {
  type: ActionType.FORM_CERTIFICATE_ADITIONAL
  payload: string;
}

/////// EDUCATION //////////
interface formEducationDegree {
  type: ActionType.FORM_EDUCATION_DEGREE
  payload: string;
}
interface formEducationSchool {
  type: ActionType.FORM_EDUCATION_SCHOOL
  payload: string;
}
interface formEducationCity {
  type: ActionType.FORM_EDUCATION_CITY
  payload: string;
}
interface formEducationCountry {
  type: ActionType.FORM_EDUCATION_COUNTRY
  payload: string;
}
interface formEducationBeginMonth {
  type: ActionType.FORM_EDUCATION_BEGIN_MONTH
  payload: string;
}
interface formEducationBeginYear {
  type: ActionType.FORM_EDUCATION_BEGIN_YEAR
  payload: string;
}
interface formEducationEndMonth {
  type: ActionType.FORM_EDUCATION_END_MONTH
  payload: string;
}
interface formEducationEndYear {
  type: ActionType.FORM_EDUCATION_END_YEAR
  payload: string;
}

/////// LANGUAGES //////////
interface formLanguage {
  type: ActionType.FORM_LANGUAGE
  payload: string;
}
interface formLanguageLevel {
  type: ActionType.FORM_LANGUAGE_LEVEL
  payload: string;
}

/////// PERSONAL INFO //////////
interface formPersonalFullName {
  type: ActionType.FORM_PERSONAL_FULLNAME
  payload: string;
}
interface formPersonalEmail {
  type: ActionType.FORM_PERSONAL_EMAIL
  payload: string;
}
interface formPersonalPhone {
  type: ActionType.FORM_PERSONAL_PHONE
  payload: string;
}
interface formPersonalAddress {
  type: ActionType.FORM_PERSONAL_ADDRESS
  payload: string;
}
interface formPersonalPostCode {
  type: ActionType.FORM_PERSONAL_POSTCODE
  payload: string;
}
interface formPersonalCity {
  type: ActionType.FORM_PERSONAL_CITY
  payload: string;
}
interface formPersonalCountry {
  type: ActionType.FORM_PERSONAL_COUNTRY
  payload: string;
}

/////// SKILLS //////////
interface formSkills {
  type: ActionType.FORM_SKILLS
  payload: string;
}
interface formSkillsAditional {
  type: ActionType.FORM_SKILLS_ADITIONAL
  payload: string;
}

/////// JOB EXPERIENCE //////////
interface formJobexperienceTitle {
  type: ActionType.FORM_JOBEXPERIENCE_TITLE
  payload: string;
}
interface formJobexperienceEmployer {
  type: ActionType.FORM_JOBEXPERIENCE_EMPLOYER
  payload: string;
}
interface formJobexperienceCity {
  type: ActionType.FORM_JOBEXPERIENCE_CITY
  payload: string;
}
interface formJobexperienceCountry {
  type: ActionType.FORM_JOBEXPERIENCE_COUNTRY
  payload: string;
}
interface formJobexperienceBeginMonth {
  type: ActionType.FORM_JOBEXPERIENCE_BEGIN_MONTH
  payload: string;
}
interface formJobexperienceBeginYear {
  type: ActionType.FORM_JOBEXPERIENCE_BEGIN_YEAR
  payload: string;
}
interface formJobexperienceEndMonth {
  type: ActionType.FORM_JOBEXPERIENCE_END_MONTH
  payload: string;
}
interface formJobexperienceEndYear {
  type: ActionType.FORM_JOBEXPERIENCE_END_YEAR
  payload: string;
}

export type Action = 
  toggleLogin 
  | headerName
  | showCvBuilder
  | toggleModal
  | formCertificate
  | formCertificateAditional
  | formEducationDegree
  | formEducationSchool
  | formEducationCity
  | formEducationCountry
  | formEducationBeginMonth
  | formEducationBeginYear
  | formEducationEndMonth
  | formEducationEndYear
  | formLanguage
  | formLanguageLevel
  | formPersonalFullName
  | formPersonalEmail
  | formPersonalPhone
  | formPersonalAddress
  | formPersonalPostCode
  | formPersonalCity
  | formPersonalCountry
  | formSkills
  | formSkillsAditional
  | formJobexperienceTitle
  | formJobexperienceEmployer
  | formJobexperienceCity
  | formJobexperienceCountry
  | formJobexperienceBeginMonth
  | formJobexperienceBeginYear
  | formJobexperienceEndMonth
  | formJobexperienceEndYear;