import { Dispatch } from 'redux';
import { PDFCategory } from '../state_interfaces/PdfState';
// I will have to import the interfaces for every categoy
// category item
// and the pdf itself

//TODO: Replace all the any types to proper type
import { ActionType, Action } from './index';

export const AddCategory = (object: PDFCategory) => {
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

export const selectItem = (name: string, itemID: string | undefined) => {
  return {
    type: ActionType.SELECT_ITEM,
    payload: {
      name,
      itemID,
    },
  };
};

export const unselectItem = (name: string, itemID: string | undefined) => {
  return {
    type: ActionType.UNSELECT_ITEM,
    payload: {
      name,
      itemID,
    },
  };
};
