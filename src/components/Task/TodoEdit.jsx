import React, { useContext } from "react";
import TodoContext from "./../../context/todoContext";

const TodoEdit = ({ updated }) => {
  const context = useContext(TodoContext);
  
  return (
    <div>
      <form
        className="form-inline justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={context.editInput}
          onChange={context.handleEditInput}
          className="form-control"
        />
        <button className="btn btn-info mr-1" onClick={() => updated()}>
          ذخیره
        </button>
      </form>
    </div>
  );
};

export default TodoEdit;
