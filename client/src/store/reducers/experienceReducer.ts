import { WorkExperienceState, WorkExperienceAction } from "../interfaces/experiences"

const initState: WorkExperienceState = {
  experience: [],
  loading: false,
  error: null
}

const experienceReducer = (state = initState, {type, payload, id}: WorkExperienceAction) => {

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
    case 'ALL_EXPERIENCES':
      return {
        ...state,
        loading: false,
        error: null,
        certificates: payload
      }
    case 'GET_EXPERIENCE':
      state = {
        ...state,
        loading: false,
        error: null
      }
      return state.experience.filter(exp => exp.id === id);
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        loading: false,
        error: null,
        experience: state.experience.map(exp => {
          if (exp.id === id) return {
            ...exp,
            ...payload
          }
          return exp;
        })
      }
    case 'DELETE_EXPERIENCE':
      return {
        ...state,
        loading: false,
        error: null,
        experience: state.experience.filter(exp => exp.id !== id)
      }
    default:
      return state;
  }
}

export default experienceReducer;