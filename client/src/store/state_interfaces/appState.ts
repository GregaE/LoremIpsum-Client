import { ModalInterface } from "../../interfaces/ModalInterface";
// I will have to import the interfaces for every categoy
// category item
// and the pdf itself

//TODO: Replace all the any types to proper type

export enum ActionType {
  TOGGLE_LOGIN = 'TOGGLE_LOGIN',
  HEADER_NAME = 'HEADER_NAME',
  SHOW_CVBUILDER = 'SHOW_CVBUILDER',
  TOGGLE_MODAL = 'TOGGLE_MODAL',

  //PDF FORM ACTIONS
  ADD_CATEGORY = 'ADD_CATEGORY',
  REMOVE_CATEGORY = 'REMOVE_CATEGORY',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  EDIT_ITEM = 'EDIT_ITEM',
  SELECT_ITEM = 'SELECT_ITEM',
  UNSELECT_ITEM = 'UNSELECT_ITEM'
}

///////////////////////////////
/////// APP NAVIGATION ////////
///////////////////////////////
export interface HeaderName {
  type: ActionType.HEADER_NAME;
  payload: string;
}

export interface ToggleLogin {
  type: ActionType.TOGGLE_LOGIN;
}

export interface ToggleModal {
  type: ActionType.TOGGLE_MODAL;
  payload: ModalInterface;
}

export interface ShowCvBuilder {
  type: ActionType.SHOW_CVBUILDER;
  payload: boolean;
}

////////////////////////////////
////////// PDF STATE ///////////
///////////////////////////////

export interface AddCategory {
  type: ActionType.ADD_CATEGORY;
  payload: any; //Interface {categoryID: string, items: categoryInterface}
}
export interface RemoveCategory {
  type: ActionType.REMOVE_CATEGORY;
  payload: string; //categoryID
}
export interface AddItem {
  type: ActionType.ADD_ITEM;
  payload: any; //Interface {itemID: string, data: categoryInterface}
}
export interface EditItem {
  type: ActionType.EDIT_ITEM;
  payload: any; //Interface {itemID: string, data: categoryInterface}
}
export interface RemoveItem {
  type: ActionType.REMOVE_ITEM;
  payload: string; //itemID
}
export interface SelectItem {
  type: ActionType.SELECT_ITEM;
  payload: string; //itemID
}
export interface UnselectItem {
  type: ActionType.UNSELECT_ITEM;
  payload: string; //itemID
}