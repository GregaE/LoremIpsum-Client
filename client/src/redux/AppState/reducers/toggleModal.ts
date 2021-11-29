import { Action, ActionType } from '../actionTypes/index';

interface State {
  showModal: boolean,
}

const initialState = {
  showModal: false,
}

const toggleModal = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.TOGGLE_MODAL:
      return {showModal: action.payload}; 
    default: 
      return state;
  }
}

export default toggleModal;