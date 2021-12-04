import { Dispatch } from 'redux';
import { ActionType, Action } from './index';
import { ProfileInterface } from '../../interfaces/ProfileInterface';

export const toggleLogin = (object: ProfileInterface) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_LOGIN,
      payload: object
    })
  }
}