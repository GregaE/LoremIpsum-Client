import { ActionType } from './index';

export const toggleModal = (
  flag: boolean,
  identifier: string,
  id?: string,
  meta?: string | Date
) => {
  return {
    type: ActionType.TOGGLE_MODAL,
    payload: {
      flag,
      identifier,
      id,
      meta,
    },
  };
};
