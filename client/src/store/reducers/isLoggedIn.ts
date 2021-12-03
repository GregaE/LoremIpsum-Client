import { ActionType } from '../actions/index';

interface State {
  isLoggedIn: boolean,
}

const initialState = {
  isLoggedIn: false,
}

type Action = {
  type: string,
  payload: boolean
}

const isLoggedIn = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.TOGGLE_LOGIN: {
      return { isLoggedIn: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default isLoggedIn;