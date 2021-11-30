import { ActionType } from '../actions/index';

interface State {
  isLogin: boolean,
}

const initialState = {
  isLogin: false,
}

type Action = {
  type: string,
  payload: string
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