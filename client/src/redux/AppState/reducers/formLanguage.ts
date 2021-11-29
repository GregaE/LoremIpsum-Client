import { Action, ActionType } from '../actionTypes/index';

interface State {
  language: string,
  level: string,
}

const initialState = {
  language: 'Hello',
  level: 'World',
}

const formLanguage = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.FORM_CERTIFICATE:
      return {...state, language : action.payload};
    case ActionType.FORM_CERTIFICATE_ADITIONAL:
      return {...state, level : action.payload};  
    default: 
      return state;
  }
}

export default formLanguage;