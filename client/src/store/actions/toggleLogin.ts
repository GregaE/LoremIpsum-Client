import { Dispatch } from 'redux';
import { ActionType, Action } from './index';

export const toggleLogin = (flag:boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_LOGIN,
      payload: flag
    })
  }
}