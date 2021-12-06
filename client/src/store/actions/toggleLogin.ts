import { Dispatch } from 'redux';
import { ActionType, Action } from './index';
import { ProfileInterface } from '../../interfaces/ProfileInterface';
import { PersonalDetails } from '../../interfaces/CategoriesInterface';

export const toggleLogin = (object: ProfileInterface) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_LOGIN,
      payload: object
    })
  }
}

export function loginDetails (personalDetail: PersonalDetails) {
  return {
    type: 'PERSONAL_DETAILS',
    payload: personalDetail
  }
}