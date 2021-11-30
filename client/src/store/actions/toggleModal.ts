import { Dispatch } from 'redux';
import { ModalInterface } from '../../interfaces/ModalInterface';
import { ActionType, Action } from './index';

export const toggleModal = (object: ModalInterface) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_MODAL,
      payload: object,
    });
  };
};
