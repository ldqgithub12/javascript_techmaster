import { Route, Router, Routes } from "react-router-dom";
import ListCourse from "./page/course/ListCourse";
import Layout from "../src/components/layout/Layout";
import CourseCreate from "./page/course/CourseCreate";
import CourseEdit from "./page/course/CourseEdit";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/admin/khoa-hoc">
            <Route index element={<ListCourse />} />
            <Route path="create" element={<CourseCreate />} />
            <Route path=":courseId" element={<CourseEdit />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
