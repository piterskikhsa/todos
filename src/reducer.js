import { TYPE } from "./constans";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.ADD_TASK:
      return [...state, action.payload];

    case TYPE.CHANGE_CHECKED_TASK:
      const index = state.findIndex((obj) => obj.id === action.payload.id);
      let newState = [...state];
      newState[index] = { ...newState[index], ...action.payload };
      return newState;

    case TYPE.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};
