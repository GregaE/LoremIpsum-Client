import { EducationAction, EducationState } from "../interfaces/education";

const initState: EducationState = {
  education: [],
  loading: false,
  error: null
}

const educationReducer = (state = initState, {type, payload, id}: EducationAction) => {

  switch (type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FAILED':
      return {
        ...state,
        loading: false,
        error: payload
      }
    case 'ALL_EDUCATION':
      return {
        ...state,
        loading: false,
        error: null,
        education: payload
      }
    case 'GET_EDUCATION':
      state = {
        ...state,
        loading: false,
        error: null
      }
      return state.education.filter(edu => edu.id === id);
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        loading: false,
        error: null,
        education: state.education.map(edu => {
          if (edu.id === id) return {
            ...edu,
            ...payload
          }
          return edu;
        })
      }
    case 'DELETE_EDUCATION':
      return {
        ...state,
        loading: false,
        error: null,
        education: state.education.filter(edu => edu.id !== id)
      }
    default:
      return state;
  }
}

export default educationReducer;