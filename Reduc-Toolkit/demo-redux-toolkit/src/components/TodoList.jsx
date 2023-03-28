import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../app/slices/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      {todos.length > 0 &&
        todos.map((todo) => (
          <p key={todo.id}>
            <span>{todo.title}</span>
            <span>
              {" "}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </span>
          </p>
        ))}
    </>
  );
}

export default TodoList;
