import { Action, ActionType } from '../actionTypes/index';

interface State {
  isLogin: boolean,
}

const initialState = {
  isLogin: false,
}

const isLogin = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.TOGGLE_LOGIN:
      return {isLogin: true}; 
    default: 
      return state;
  }
}

export default isLogin;