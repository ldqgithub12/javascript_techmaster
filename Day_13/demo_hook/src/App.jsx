import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import './App.css'
import Content from './hooks/useState/Content'
import Post from './hooks/useEffect/Post'
import Data from './hooks/useEffect/Data'
import UserList from './hooks/useEffect/UserList'

function App() {
  return (
      <>
        {/* <Content></Content>
        <Post></Post> */}
        {/* <Data></Data> */}
        <UserList></UserList>
      </>
  )
}

export default App
