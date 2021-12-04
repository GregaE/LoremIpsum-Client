import { CVState, CVAction } from '../state_interfaces/cv';

const initState: CVState = {
  cvs: [],
  loading: false,
  error: null,
};

const cvsReducer = (state = initState, { type, payload, id }: CVAction) => {
  //TODO - move Loading and failed into a separate reducer and revome them
  //from the other reducers
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
    case 'ALL_CVS':
      return {
        ...state,
        loading: false,
        error: null,
        cvs: payload,
      };
    case 'POST_CV':
      return {
        ...state,
        loading: false,
        error: null,
        cvs: [...state.cvs, payload] 
      };
    case 'UPDATE_CV':
      return {
        ...state,
        loading: false,
        error: null,
        cvs: state.cvs.map(cv => {
          if (cv.id === id)
            return {
              ...payload,
            };
          return cv;
        }),
      };
    case 'DELETE_CV':
      return {
        ...state,
        loading: false,
        error: null,
        cvs: state.cvs.filter(cv => cv.id !== id),
      };
    default:
      return state;
  }
};

export default cvsReducer;
