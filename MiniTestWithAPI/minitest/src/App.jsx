import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartItem from './components/cartItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartItem></CartItem>
    </>
  )
}

export default App
