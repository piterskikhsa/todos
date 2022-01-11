import { TYPE } from "./constans";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.TASK_ADD:
      return [...state, action.payload];

    case TYPE.TASK_TOGGLE_CHECKED:
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return newState;

    case TYPE.TASK_DELETE:
      return state.filter((task) => task.id !== action.payload.id);

    case TYPE.TASK_TOGGLE_CHECKED_ALL:
      return state.map((task) => ({
        ...task,
        checked: action.payload.checked,
      }));

    case TYPE.TASK_CLEAR:
      return [];

    default:
      return state;
  }
};
