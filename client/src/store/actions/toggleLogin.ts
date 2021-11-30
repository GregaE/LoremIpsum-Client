import { Dispatch } from 'redux';
import { ActionType, Action } from './index';

export const toggleLogin = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_LOGIN,
    })
  }
} 