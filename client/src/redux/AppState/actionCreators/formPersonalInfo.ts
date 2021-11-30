import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const formPersonalFullName = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_PERSONAL_FULLNAME,
      payload: newName
    })
  }
} 

export const formPersonalEmail = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_PERSONAL_EMAIL,
      payload: newName
    })
  }
} 

export const formPersonalPhone = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_PERSONAL_PHONE,
      payload: newName
    })
  }
} 

export const formPersonalAddress = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_PERSONAL_ADDRESS,
      payload: newName
    })
  }
} 

export const formPersonalPostCode = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_PERSONAL_POSTCODE,
      payload: newName
    })
  }
} 

export const formPersonalCity = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_PERSONAL_CITY,
      payload: newName
    })
  }
} 

export const formPersonalCountry = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_PERSONAL_COUNTRY,
      payload: newName
    })
  }
} 