import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  todo: "",
  editInput: "",
  showEdit: false,
  updatedTaskName: "",
  valueEditeInput: "",
  handleCreateNewTodo: () => {},
  handleTodoInput: () => {},
  handleCompletedTodo: () => {},
  handleDeleteTodo: () => {},
  handleEditedTodo: () => {},
  handleEditInput: () => {},
  handleUpdatedTodo: () => {},
});

export default TodoContext;
