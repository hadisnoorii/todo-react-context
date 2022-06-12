import React, { useState } from "react";
import uuidv4 from "uuid/v4";

import TodoContext from "../context/todoContext";
import Todos from "../components/Task/Todos";
import AddNewTask from "../components/Task/AddNewTask";

const App = () => {
  const [getTodos, setTodos] = useState([]);
  const [getTodo, setTodo] = useState("");
  const [getEditInput, setEditInput] = useState("");
  const [getShowEdit, setShowEdit] = useState(0);
  const [getValueEditInput, setValueEditInput] = useState("");

  const handleCreateNewTodo = () => {
    const todos = [...getTodos];
    const todo = {
      id: uuidv4(),
      text: getTodo,
      completed: false,
    };
    if (getTodo !== "" && getTodo !== " ") {
      todos.push(todo);
      setTodos(todos);
      setTodo("");
    }
  };

  const handleCompletedTodo = (id) => {
    const todos = [...getTodos];
    const todoIndex = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIndex];
    todo.completed = !todo.completed;
    todos[todoIndex] = todo;
    setTodos(todos);
  };

  const handleDeleteTodo = (id) => {
    const todos = [...getTodos];
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const handleTodoInput = (event) => {
    setTodo(event.target.value);
  };

  const handleEditedTodo = (id) => {
    const todosEdited = [...getTodos];
    const todoIndex = todosEdited.findIndex((te) => te.id === id);
    const editedTodo = todosEdited[todoIndex].text;

    setEditInput(editedTodo);
    setShowEdit(id);
  };

  const handleEditInput = (event) => {
    const editedValueInput = event.target.value;
    setEditInput(editedValueInput);
    setValueEditInput(editedValueInput);
  };

  const handleUpdatedTodo = (id) => {
    let todo = getTodos.find((te) => te.id === id);
    let otherTodos = getTodos.filter((te) => te.id !== id);
    let updatedTodo = {
      ...todo,
      text:
        getValueEditInput == "" || getValueEditInput == " "
          ? todo.text
          : getValueEditInput,
    };
    setTodos([...otherTodos, updatedTodo]);

    setShowEdit(false);
    console.log("hadis:", getValueEditInput);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getTodos,
        todo: getTodo,
        editInput: getEditInput,
        showEdit: getShowEdit,
        valueEditInput: getValueEditInput,
        handleCreateNewTodo: handleCreateNewTodo,
        handleTodoInput: handleTodoInput,
        handleCompletedTodo: handleCompletedTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleEditedTodo: handleEditedTodo,
        handleEditInput: handleEditInput,
        handleUpdatedTodo: handleUpdatedTodo,
      }}
    >
      <div className="d-flex justify-content-center container">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <Todos />
          </div>
        </div>
      </div>
      <AddNewTask />
    </TodoContext.Provider>
  );
};

export default App;
