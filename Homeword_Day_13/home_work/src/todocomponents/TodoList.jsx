import React, { useEffect, useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/api/todo/list");
      const dataJson = await data.json();
      console.log(dataJson);
      setTodo(dataJson);
    };
    fetchData();
  }, []);
  const addNewTodo = async () => {
    const request = await fetch("http://localhost:8080/api/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    setTodo([...todo, input]);
    setInput("");
  };
  const deleteTodo = async (id) => {
    const newTodo = todo.filter((t) => t.id !== id);
    setTodo(newTodo);
    const request = await fetch(`http://localhost:8080/api/todo/${id}`, {
      method: "DELETE",
    });
  };
  const editTodo = (id, todo) => {};
  console.log(todo);
  return (
    <>
      <h1>Todo List</h1>
      <input
        id="todo-input"
        type="text"
        placeholder="Enter todo title ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="btn-add" onClick={() => addNewTodo()}>
        Add
      </button>
      <ul>
        {todo.map((item) => (
          <li>
            <input type="checkbox" onclick="toggleStatus(${element.id})" />
            <span>{item.title}</span>
            <button onClick={() => editTodo(item.id)}>Edit</button>
            <button onClick={() => deleteTodo(item.id, item.title)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
