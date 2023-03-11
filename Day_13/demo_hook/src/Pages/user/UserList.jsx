import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/api/users/");
      // let rs = await axios.get("http://localhost:8080/api/users/");
      // console.log(rs)
      const dataJson = await data.json();
      setData(dataJson);
    };
    fetchData();
  }, []);
  const deleteUser = async (id) => {
    const newUserList = data.filter((p) => p.id !== id);
    setData(newUserList);
    const response = await fetch(`http://localhost:8080/api/users/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase">Danh sách user</h2>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
            <Link to={"./create"} className="btn btn-warning">
              Tạo user
            </Link>
            <input
              type="text"
              id="search"
              className="form-control w-50"
              placeholder="Tìm kiếm user"
            />
          </div>

          <div className="bg-light p-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>
                      <Link
                        to={`/users/${item.id}`}
                        className="btn btn-success"
                      >
                        Xem chi tiết
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="message d-none"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
