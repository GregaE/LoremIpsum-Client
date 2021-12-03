import { ProfileInterface } from '../../interfaces/ProfileInterface';
import { ActionType, ToggleLogin } from '../state_interfaces/appState';

const initialState: ProfileInterface = {
  isLoggedIn: false,
  userId: '',
}

const isLoggedIn = (
  state = initialState, 
  { type, payload }: ToggleLogin
  ):ProfileInterface  => {
  switch(type) {
    case ActionType.TOGGLE_LOGIN: {
      return { 
        ...state, 
        isLoggedIn: payload.isLoggedIn,
        userId: payload.userId,
      };
    }
    default: {
      return state;
    }
  }
}

export default isLoggedIn;