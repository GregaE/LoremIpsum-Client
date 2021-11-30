import { ActionType } from '../actions/index';

interface State {
  headerName: string,
}

const initialState = {
  headerName: 'Home',
}

type Action = {
  type: string;
  payload: string;
}

const headerName = (state: State = initialState, {type, payload}: Action):State => {
  switch(type) {
    case ActionType.HEADER_NAME:
      return {headerName : payload}; 
    default: 
      return state;
  }
}

export default headerName;