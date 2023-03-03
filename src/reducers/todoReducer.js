export const initialStateTodo = [];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "READ":
      return action.data;
    case "CREATE":
      return state.concat(action.data);
    case "UPDATE":
      return state.map(todoItem =>
        todoItem.id === action.data.id
          ? {
              ...todoItem,
              todo: action.data.todo,
              isCompleted: action.data.isCompleted,
            }
          : todoItem
      );
    case "DELETE":
      return state.filter(todoItem => todoItem.id !== action.id);
    default:
  }
};
