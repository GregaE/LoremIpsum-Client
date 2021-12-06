import {
  PersonalDetailsState,
  PersonalDetailsAction,
} from '../state_interfaces/personalDetails';
import { PersonalDetails } from '../../interfaces/CategoriesInterface';

const initState: PersonalDetailsState = {
  personal_details: {} as PersonalDetails,
  loading: false,
  error: null,
};

const personalDetailsReducer = (
  state = initState,
  { type, payload, id }: PersonalDetailsAction
) => {
  console.log('from personal Detail reducer payload:', payload)
  switch (type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FAILED':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'PERSONAL_DETAILS':
      return {
        ...state,
        loading: false,
        error: null,
        personal_details: payload,
      };
    default:
      return state;
  }
};

export default personalDetailsReducer;
