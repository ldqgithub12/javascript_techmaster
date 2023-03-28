import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import TodoList from "./components/todolist/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoList></TodoList>
    </>
  );
}

export default App;
