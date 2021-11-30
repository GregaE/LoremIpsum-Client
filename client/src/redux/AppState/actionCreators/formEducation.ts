import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const formEducationDegree = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_DEGREE,
      payload: newName
    })
  }
} 

export const formEducationSchool = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_SCHOOL,
      payload: newName
    })
  }
} 

export const formEducationCity = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_CITY,
      payload: newName
    })
  }
} 

export const formEducationCountry = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_COUNTRY,
      payload: newName
    })
  }
} 

export const formEducationBeginMonth = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_BEGIN_MONTH,
      payload: newName
    })
  }
} 

export const formEducationBeginYear = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_BEGIN_YEAR,
      payload: newName
    })
  }
} 

export const formEducationEndMonth = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_END_MONTH,
      payload: newName
    })
  }
} 

export const formEducationEndYear = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_EDUCATION_END_YEAR,
      payload: newName
    })
  }
} 