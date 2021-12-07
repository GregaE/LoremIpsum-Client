import { ActionType } from './index';

export const toggleModal = (flag: boolean, identifier:string, id?: string) => {
  return {
    type: ActionType.TOGGLE_MODAL,
    payload: {
      flag,
      identifier,
      id,
    },
  };
};
