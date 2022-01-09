export const getNewId = (arr) => {
  const lastTask = arr[arr.length - 1];
  return lastTask ? lastTask.id + 1 : 1;
};
