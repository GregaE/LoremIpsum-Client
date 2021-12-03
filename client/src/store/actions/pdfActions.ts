import { Dispatch } from 'redux';
import { ModalInterface } from '../../interfaces/ModalInterface';
// I will have to import the interfaces for every categoy
// category item
// and the pdf itself

//TODO: Replace all the any types to proper type
import { ActionType, Action } from './index';

export const AddCategory = (object: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_CATEGORY,
      payload: object,
    });
  };
};

export const RemoveCategory = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_CATEGORY,
      payload: id,
    });
  };
};

export const AddItem = (object: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: object,
    });
  };
};

export const EditItem = (object: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EDIT_ITEM,
      payload: object,
    });
  };
};

export const RemoveItem = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_ITEM,
      payload: id,
    });
  };
};

export const SelectItem = (object: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SELECT_ITEM,
      payload: object,
    });
  };
};

export const UnselectItem = (object: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UNSELECT_ITEM,
      payload: object,
    });
  };
};