import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const formCertificate = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_CERTIFICATE,
      payload: newName
    })
  }
} 

export const formCertificateAditional = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_CERTIFICATE_ADITIONAL,
      payload: newName
    })
  }
} 