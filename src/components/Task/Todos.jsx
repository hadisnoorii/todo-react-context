import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "./../../context/todoContext";
import TodoEdit from "./TodoEdit";

const Todos = () => {
  const context = useContext(TodoContext);
  const {
    todos,
    handleDeleteTodo,
    handleCompletedTodo,
    handleEditedTodo,
    handleUpdatedTodo,
  } = context;
  return (
    <ul className="list-group list-group-flush">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <Todo
              text={todo.text}
              isCompleted={todo.completed}
              deleted={() => handleDeleteTodo(todo.id)}
              completed={() => handleCompletedTodo(todo.id)}
              edited={() => handleEditedTodo(todo.id)}
            />
            {context.showEdit === todo.id ? (
              <TodoEdit
                updated={() => {
                  return handleUpdatedTodo(todo.id);
                }}
              />
            ) : null}
          </li>
        ))
      ) : (
        <div className="alert alert-light mt-3 w-75 mx-auto">
          <p className="text-center">هیچ کاری برای امروز ثبت نشده</p>
        </div>
      )}
    </ul>
  );
};

export default Todos;
