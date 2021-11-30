import { Action, ActionType } from '../actions/index';

interface State {
  builder: boolean,
}

const initialState = {
  builder: false,
}

const showCvBuilder = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.SHOW_CVBUILDER:
      return {builder: action.payload}; 
    default: 
      return state;
  }
}

export default showCvBuilder;