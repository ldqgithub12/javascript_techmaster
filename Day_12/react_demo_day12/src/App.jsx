import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDoList from './components/todolist/ToDoList'
import Counter from './counter/Counter'
import Register from './components/register/Register'

function App() {
  const [show, setShow] = useState(true);
  const toggle=()=>{
    setShow(!show);
  }
  return (
    <>
      {/* <Counter></Counter> */}
      {/* {show && <Counter/>}
      <button onClick={toggle}>Toggle</button> */}
      <Register></Register>
    </>
  )
}

export default App
