import { ActionType, ShowCvBuilder } from '../state_interfaces/appState';

interface BuilderState {
  builder: boolean,
}

const initialState: BuilderState = {
  builder: false,
}

const showCvBuilder = (
  state = initialState,
  {type, payload}: ShowCvBuilder
): BuilderState =>{
  switch(type) {
    case ActionType.SHOW_CVBUILDER:
      return {builder: payload};
    default:
      return state;
  }
}

export default showCvBuilder;