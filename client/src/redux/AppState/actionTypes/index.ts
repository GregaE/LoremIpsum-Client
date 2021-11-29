export enum ActionType {
    TOGGLE_LOGIN = 'TOGGLE_LOGIN',
    HEADER_NAME = 'HEADER_NAME',
    SHOW_CVBUILDER = 'SHOW_CVBUILDER',
    TOGGLE_MODAL = 'TOGGLE_MODAL',
}

interface headerName {
  type: ActionType.HEADER_NAME;
  payload: string;
}

interface toggleLogin {
  type: ActionType.TOGGLE_LOGIN;
}

interface toggleModal {
  type: ActionType.TOGGLE_MODAL;
  payload: boolean;
}


interface showCvBuilder {
  type: ActionType.SHOW_CVBUILDER
  payload: boolean;
}

export type Action = 
  toggleLogin 
  | headerName
  | showCvBuilder
  | toggleModal;