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
        <Route element={<Layout />}>
          <Route path="/khoa-hoc">
            <Route index element={<ListCourse />} />
            <Route path="online" element={<OnlineCourse />} />
            <Route path="onlab" element={<OnlabCourse />} />
            <Route path=":courseId" element={<CourseDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
