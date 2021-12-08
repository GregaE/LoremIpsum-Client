import { Interview } from '../../interfaces/CategoriesInterface';
import { ActionType } from '../state_interfaces/appState';

const initialInterview: Interview[] = [];

export const interviewReducer = (
  state = initialInterview,
  { type, payload }: { type: string; payload: Interview & Interview[] }
) => {
  switch (type) {
    case ActionType.ALL_INTERVIEWS:
      return [...payload];
    case ActionType.ADD_INTERVIEW:
      return [...state, payload];
    case ActionType.EDIT_INTERVIEW: {
      return state.map(interview =>
        interview.id === payload.id ? { ...payload } : interview
      );
    }
    case ActionType.DELETE_INTERVIEW: {
      return state.filter(interview => interview.id !== payload.id);
    }

    default:
      return state;
  }
};
