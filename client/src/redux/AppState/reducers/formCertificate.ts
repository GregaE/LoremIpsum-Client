import { Action, ActionType } from '../actionTypes/index';

interface State {
  name: string,
  aditional: string,
}

const initialState = {
  name: 'Hello',
  aditional: 'World',
}

const formCertificate = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.FORM_CERTIFICATE:
      return {...state, name : action.payload};
    case ActionType.FORM_CERTIFICATE_ADITIONAL:
      return {...state, aditional : action.payload};  
    default: 
      return state;
  }
}

export default formCertificate;