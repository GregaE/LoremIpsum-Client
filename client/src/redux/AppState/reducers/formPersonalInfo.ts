import { Action, ActionType } from '../actionTypes/index';

interface State {
  fullName: string,
  email: string,
  phone: string,
  address: string,
  postcode: string,
  city: string,
  country: string,
}

const initialState = {
  fullName: 'Hello',
  email: 'World',
  phone: 'Hello',
  address: 'World',
  postcode: 'Hello',
  city: 'World',
  country: 'Hello',
}

const formPersonal = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.FORM_PERSONAL_FULLNAME:
      return {...state, fullName : action.payload};
    case ActionType.FORM_PERSONAL_EMAIL:
      return {...state, email : action.payload};
    case ActionType.FORM_PERSONAL_PHONE:
      return {...state, phone : action.payload};
    case ActionType.FORM_PERSONAL_ADDRESS:
      return {...state, address : action.payload};
    case ActionType.FORM_PERSONAL_POSTCODE:
      return {...state, postcode : action.payload};
    case ActionType.FORM_PERSONAL_CITY:
      return {...state, city : action.payload}; 
    case ActionType.FORM_PERSONAL_COUNTRY:
      return {...state, country : action.payload};  
    default: 
      return state;
  }
}

export default formPersonal;