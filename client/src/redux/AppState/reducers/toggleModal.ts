import { ModalInterface } from '../../../interfaces/ModalInterface';
import { Action, ActionType } from '../actionTypes/index';

const initialState = {
  flag: false,
  identifier: '',
};

const toggleModal = (
  state: ModalInterface = initialState,
  action: Action
): ModalInterface => {
  switch (action.type) {
    case ActionType.TOGGLE_MODAL:
      return {
        ...state,
        flag: action.payload.flag,
        identifier: action.payload.identifier,
      };
    default:
      return state;
  }
};

export default toggleModal;
