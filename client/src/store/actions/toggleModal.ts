import { ActionType } from './index';

export const toggleModal = (flag: boolean, id: string) => {
  return {
    type: ActionType.TOGGLE_MODAL,
    payload: {
      flag,
      identifier: id,
    },
  };
};
