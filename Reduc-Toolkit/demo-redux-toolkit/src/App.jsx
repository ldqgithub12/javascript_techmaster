import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ListCourse from "./page/Course/ListCourse";
import OnlineCourse from "./page/Course/OnlineCourse";
import OnlabCourse from "./page/Course/OnlabCourse";
import CourseDetail from "./page/Course/CourseDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/khoa-hoc">
            <Route index element={<ListCourse></ListCourse>}></Route>
            <Route
              path="online"
              element={<OnlineCourse></OnlineCourse>}
            ></Route>
            <Route path="onlab" element={<OnlabCourse></OnlabCourse>}></Route>
            <Route
              path=":courseId"
              element={<CourseDetail></CourseDetail>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
