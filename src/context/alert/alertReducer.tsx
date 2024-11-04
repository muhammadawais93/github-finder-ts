import { SET_ALERT, REMOVE_ALERT } from '../types';

// TODO: Define the types for the state and action
export default (state: any, action: any) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
