import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const formJobexperienceTitle = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_TITLE,
      payload: newName
    })
  }
} 

export const formJobexperienceEmployer = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_EMPLOYER,
      payload: newName
    })
  }
} 

export const formJobexperienceCity = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_CITY,
      payload: newName
    })
  }
} 

export const formJobexperienceCountry = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_COUNTRY,
      payload: newName
    })
  }
} 

export const formJobexperienceBeginMonth = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_BEGIN_MONTH,
      payload: newName
    })
  }
} 

export const formJobexperienceBeginYear = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_BEGIN_YEAR,
      payload: newName
    })
  }
} 

export const formJobexperienceEndMonth = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_END_MONTH,
      payload: newName
    })
  }
} 

export const formJobexperienceEndYear = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_JOBEXPERIENCE_END_YEAR,
      payload: newName
    })
  }
} 