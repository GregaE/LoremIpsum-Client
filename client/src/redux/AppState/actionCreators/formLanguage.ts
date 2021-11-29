import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const formLanguage = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_LANGUAGE,
      payload: newName
    })
  }
} 

export const formLanguageLevel = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_LANGUAGE_LEVEL,
      payload: newName
    })
  }
} 