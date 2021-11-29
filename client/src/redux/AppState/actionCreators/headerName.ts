import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const headerName = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HEADER_NAME,
      payload: newName
    })
  }
} 