import { ModalInterface } from '../../interfaces/ModalInterface';
import { PDFCategory, PDFItem } from '../state_interfaces/PdfState';
import { ProfileInterface } from '../../interfaces/ProfileInterface';
import { PDF } from '../../interfaces/PdfInterface';

export enum ActionType {
  TOGGLE_LOGIN = 'TOGGLE_LOGIN',
  HEADER_NAME = 'HEADER_NAME',
  SHOW_CVBUILDER = 'SHOW_CVBUILDER',
  TOGGLE_MODAL = 'TOGGLE_MODAL',

  ADD_CATEGORY = 'ADD_CATEGORY',
  REMOVE_CATEGORY = 'REMOVE_CATEGORY',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  EDIT_ITEM = 'EDIT_ITEM',
  SELECT_ITEM = 'SELECT_ITEM',
  UNSELECT_ITEM = 'UNSELECT_ITEM',
  LOAD_PDF = 'LOAD_PDF',
}

///////////////////////////////
/////// APP NAVIGATION ////////
///////////////////////////////
interface headerName {
  type: ActionType.HEADER_NAME;
  payload: string;
}
interface toggleLogin {
  type: ActionType.TOGGLE_LOGIN;
  payload: ProfileInterface;
}
interface toggleModal {
  type: ActionType.TOGGLE_MODAL;
  payload: ModalInterface;
}
interface showCvBuilder {
  type: ActionType.SHOW_CVBUILDER;
  payload: boolean;
}
interface AddCategory {
  type: ActionType.ADD_CATEGORY;
  payload: PDFCategory; //Interface {name: string, items: categoryInterface}
}
interface RemoveCategory {
  type: ActionType.REMOVE_CATEGORY;
  payload: string; //name
}
interface LoadPdf {
  type: ActionType.LOAD_PDF;
  payload: Partial<PDF[]>;
}
// interface EditItem {
//   type: ActionType.EDIT_ITEM;
//   payload: any; //Interface {categoryName: string, itemId: string, data: categoryInterface}
// }
// interface RemoveItem {
//   type: ActionType.REMOVE_ITEM;
//   payload: PDFItem; //Interface {categoryName: string, itemId: string}
// }
interface SelectItem {
  type: ActionType.SELECT_ITEM;
  payload: PDFItem; //Interface {categoryName: string, itemId: string}
}
interface UnselectItem {
  type: ActionType.UNSELECT_ITEM;
  payload: PDFItem; //Interface {categoryName: string, itemId: string}
}

export type Action =
  | toggleLogin
  | headerName
  | showCvBuilder
  | toggleModal
  | AddCategory
  | RemoveCategory
  | LoadPdf
  // | EditItem
  // | RemoveItem
  | SelectItem
  | UnselectItem;
