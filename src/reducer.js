import { TYPE } from "./constans";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.ADD_TASK:
      return [...state, action.payload];

    case TYPE.CHANGE_CHECKED_TASK:
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          return (item = { ...item, ...action.payload });
        }
        return item;
      });
      return newState;

    case TYPE.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};
