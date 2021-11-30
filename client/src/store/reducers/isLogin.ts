import { ActionType, ToggleLogin } from '../state_interfaces/appState';

export interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false
}

const isLogin = (
  state = initialState,
  {type}: ToggleLogin
): LoginState => {
  switch(type) {
    case ActionType.TOGGLE_LOGIN:
      return {isLogin: true};
    default:
      return state;
  }
}

export default isLogin;