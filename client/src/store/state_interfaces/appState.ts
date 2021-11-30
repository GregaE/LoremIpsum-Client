import { ModalInterface } from "../../interfaces/ModalInterface";

export enum ActionType {
  TOGGLE_LOGIN = 'TOGGLE_LOGIN',
  HEADER_NAME = 'HEADER_NAME',
  SHOW_CVBUILDER = 'SHOW_CVBUILDER',
  TOGGLE_MODAL = 'TOGGLE_MODAL',
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