import { PersonalDetailsState, PersonalDetailsAction, PersonalDetails } from "../interfaces/personalDetails"

const initState: PersonalDetailsState = {
  personal_details: <PersonalDetails>{},
  loading: false,
  error: null
}

const personalDetailsReducer = (state = initState, {type, payload, id}: PersonalDetailsAction) => {

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
    //only single thing needed as get will get the whole object and update recieves the whole object
    case 'PERSONAL_DETAILS':
      return {
        ...state,
        loading: false,
        error: null,
        personal_details: payload
      }
    default:
      return state;
  }
}

export default personalDetailsReducer;