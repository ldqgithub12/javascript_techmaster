import { useState } from "react"
import TodoList from "./TodoList";

function FormInput() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  
  const handleOnClickAdd = () => {
    setTodo([...todo, input]);
    setInput("");
  }

  const handleOnClickRemove = () => {
    const newTodo = [...todo];
    const remove = newTodo.filter()
  }

    return (
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => handleOnClickAdd()}>Add</button>
        <button onClick={() => handleOnClickRemove()}>Remove</button>
        <TodoList todo={todo}/>
      </div>
    )
  }
  
  export default FormInput