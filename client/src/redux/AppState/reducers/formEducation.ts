import { Action, ActionType } from '../actionTypes/index';

interface State {
  degree: string,
  school: string,
  city: string,
  country: string,
  beginMonth: string,
  beginYear: string,
  endMonth: string,
  endYear: string,
}

const initialState = {
  degree: 'Hello',
  school: 'World',
  city: 'Hello',
  country: 'World',
  beginMonth: 'Hello',
  beginYear: 'World',
  endMonth: 'Hello',
  endYear: 'World',
}

const formEducation = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.FORM_EDUCATION_DEGREE:
      return {...state, degree : action.payload};
    case ActionType.FORM_EDUCATION_SCHOOL:
      return {...state, school : action.payload};
    case ActionType.FORM_EDUCATION_CITY:
      return {...state, city : action.payload};
    case ActionType.FORM_EDUCATION_COUNTRY:
      return {...state, country : action.payload};
    case ActionType.FORM_EDUCATION_BEGIN_MONTH:
      return {...state, beginMonth : action.payload};
    case ActionType.FORM_EDUCATION_BEGIN_YEAR:
      return {...state, beginYear : action.payload}; 
    case ActionType.FORM_EDUCATION_END_MONTH:
      return {...state, endMonth : action.payload};
    case ActionType.FORM_EDUCATION_END_YEAR:
      return {...state, endYear : action.payload};   
    default: 
      return state;
  }
}

export default formEducation;