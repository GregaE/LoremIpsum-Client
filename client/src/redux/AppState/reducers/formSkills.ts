import { Action, ActionType } from '../actionTypes/index';

interface State {
  name: string,
  aditional: string,
}

const initialState = {
  name: 'Hello',
  aditional: 'World',
}

const formSkills = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.FORM_SKILLS:
      return {...state, name : action.payload};
    case ActionType.FORM_SKILLS_ADITIONAL:
      return {...state, aditional : action.payload};  
    default: 
      return state;
  }
}

export default formSkills;