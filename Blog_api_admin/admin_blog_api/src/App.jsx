import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PrivateRoutes from "./components/PrivateRoutes";
import BlogList from "./components/pages/blog/BlogList";
import OwnBlog from "./components/pages/blog/OwnBlog";
import BlogDetail from "./components/pages/blog/BlogDetail";
import BlogCreate from "./components/pages/blog/BlogCreate";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Layout />}>
          <Route element={<PrivateRoutes />}>
            <Route path="blogs">
              <Route index element={<BlogList></BlogList>} />
              <Route path="own-blogs" element={<OwnBlog></OwnBlog>} />
              <Route path=":blogId" element={<BlogDetail></BlogDetail>} />
              <Route path="create" element={<BlogCreate></BlogCreate>} />
            </Route>
          </Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
