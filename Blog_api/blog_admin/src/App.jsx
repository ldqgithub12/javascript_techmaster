import { useState } from "react";
import ListBlog from "./page/blog/ListBlog";
import BlogDetail from "./page/blog/BlogDetail";
import Layout from "./components/layout/Layout";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/blogs">
            <Route index element={<ListBlog />} />
            <Route path=":blogId" element={<BlogDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
