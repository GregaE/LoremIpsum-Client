import { ActionType } from '../actions/index';

interface State {
  isLogin: boolean,
}

const initialState = {
  isLogin: false,
}

type Action = {
  type: string,
  payload: boolean
}

const isLogin = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.TOGGLE_LOGIN: {
      return { isLogin: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default isLogin;