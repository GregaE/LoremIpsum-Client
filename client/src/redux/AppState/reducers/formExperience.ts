import { Action, ActionType } from '../actionTypes/index';

interface State {
  title: string,
  employer: string,
  city: string,
  country: string,
  beginMonth: string,
  beginYear: string,
  endMonth: string,
  endYear: string,
}

const initialState = {
  title: 'Hello',
  employer: 'World',
  city: 'Hello',
  country: 'World',
  beginMonth: 'Hello',
  beginYear: 'World',
  endMonth: 'Hello',
  endYear: 'World',
}

const formExperience = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.FORM_JOBEXPERIENCE_TITLE:
      return {...state, title : action.payload};
    case ActionType.FORM_JOBEXPERIENCE_EMPLOYER:
      return {...state, employer : action.payload};
    case ActionType.FORM_JOBEXPERIENCE_CITY:
      return {...state, city : action.payload};
    case ActionType.FORM_JOBEXPERIENCE_COUNTRY:
      return {...state, country : action.payload};
    case ActionType.FORM_JOBEXPERIENCE_BEGIN_MONTH:
      return {...state, beginMonth : action.payload};
    case ActionType.FORM_JOBEXPERIENCE_BEGIN_YEAR:
      return {...state, beginYear : action.payload}; 
    case ActionType.FORM_JOBEXPERIENCE_END_MONTH:
      return {...state, endMonth : action.payload};
    case ActionType.FORM_JOBEXPERIENCE_END_YEAR:
      return {...state, endYear : action.payload};   
    default: 
      return state;
  }
}

export default formExperience;