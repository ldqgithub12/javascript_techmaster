import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import Content from "./hooks/useState/Content";
import Post from "./hooks/useEffect/Post";
import Data from "./hooks/useEffect/Data";
import UserList from "./Pages/user/UserList";
import { Route, Routes } from "react-router-dom";
import UserCreate from "./Pages/user/UserCreate";
import UserDetails from "./Pages/user/UserDetails";
import NotFound from "./Pages/not-found/NotFound";

function App() {
  return (
    <>
      {/* <Content></Content>
        <Post></Post> */}
      {/* <Data></Data> */}
      <Routes>
        <Route path="/users">
          <Route index element={<UserList />} />
          <Route path="create" element={<UserCreate />} />
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
