export enum ActionType {
    TOGGLE_LOGIN = 'TOGGLE_LOGIN',
    HEADER_NAME = 'HEADER_NAME',
}

interface headerName {
  type: ActionType.HEADER_NAME;
  payload: string;
}

interface toggleLogin {
  type: ActionType.TOGGLE_LOGIN;
}

export type Action = toggleLogin | headerName;