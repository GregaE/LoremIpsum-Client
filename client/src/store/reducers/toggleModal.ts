import { ModalInterface } from '../../interfaces/ModalInterface';
import { ActionType, ToggleModal } from '../state_interfaces/appState';

const initialState: ModalInterface = {
  flag: false,
  identifier: '',
  id: '',
  meta: '',
};

const toggleModal = (
  state = initialState,
  { type, payload }: ToggleModal
): ModalInterface => {
  switch (type) {
    case ActionType.TOGGLE_MODAL:
      return {
        ...state,
        flag: payload.flag,
        identifier: payload.identifier,
        id: payload.id,
        meta: payload.meta,
      };
    default:
      return state;
  }
};

export default toggleModal;
