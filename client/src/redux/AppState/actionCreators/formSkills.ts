import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';

export const formSkills = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_SKILLS,
      payload: newName
    })
  }
} 

export const formSkillsAditional = (newName: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FORM_SKILLS_ADITIONAL,
      payload: newName
    })
  }
} 