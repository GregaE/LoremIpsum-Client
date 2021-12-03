import { ActionType, HeaderName } from '../state_interfaces/appState';

interface HeaderState {
  headerName: string;
}

const initialState: HeaderState = {
  headerName: 'Home'
}

const headerName = (
  state = initialState,
  {type, payload}: HeaderName
): HeaderState => {
  switch(type) {
    case ActionType.HEADER_NAME:
      return {headerName: payload};
    default:
      return state;
  }
}

export default headerName;