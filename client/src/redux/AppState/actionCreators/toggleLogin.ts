import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const toggleLogin = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_LOGIN,
    })
  }
} 