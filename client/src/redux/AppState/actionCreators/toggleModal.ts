import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const toggleModal = (flag:boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_MODAL,
      payload: flag
    })
  }
} 