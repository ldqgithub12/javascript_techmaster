import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteCourseMutation,
  useGetAllCourseQuery,
} from "../../app/services/courseServices";

function ListCourse() {
  const { data, isLoading } = useGetAllCourseQuery();
  const [deleteCourse] = useDeleteCourseMutation();
  if (isLoading) {
    return <h2>Loading ... </h2>;
  }
  const handleDelete = (id) => {
    deleteCourse(id)
      .unwrap()
      .then(() => alert("Delete success"))
      .catch((err) => alert(err));
  };
  return (
    <div className="course-list mt-4 mb-4">
      <div className="container">
        <div className="mb-4">
          <Link to={"create"} className="btn-custom btn-create-course">
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Tạo khóa học
          </Link>
          <Link to={"create"} className="btn-custom btn-refresh">
            <span>
              <i className="fa-solid fa-arrow-rotate-right"></i>
            </span>
            Refresh
          </Link>
        </div>

        <div className="course-list-inner p-2">
          <table className="table course-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên khóa học</th>
                <th>Hình thức</th>
                <th>Chủ đề</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((c, index) => (
                  <tr key={c.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/admin/khoa-hoc/${c.id}`}>{c.name}</Link>
                    </td>
                    <td className="text-info">{c.type}</td>
                    <td>{c.category.map((c) => c.name).join(", ")}</td>
                    <tr>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(c.id)}
                      >
                        Delete
                      </button>
                    </tr>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListCourse;
