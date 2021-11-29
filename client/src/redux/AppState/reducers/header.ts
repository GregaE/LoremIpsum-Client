import { Action, ActionType } from '../actionTypes/index';

interface State {
  headerName: string,
}

const initialState = {
  headerName: 'Home',
}

const headerName = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.HEADER_NAME:
      return {headerName : action.payload}; 
    default: 
      return state;
  }
}

export default headerName;