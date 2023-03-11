import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UserCreate() {
  const [province, setProvince] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const province = await fetch("https://provinces.open-api.vn/api/p/");
      const dataJson = await province.json();
      console.log(dataJson);
      setProvince(dataJson);
    };
    fetchData();
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4">
            <div className="mb-3">
              <label className="col-form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone</label>
              <input
                type="text"
                id="phone"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address</label>
              <select className="form-select" id="address">
                {province.map((item) => (
                  <option key={item.code} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-secondary btn-back">Quay lại</button>
            <button className="btn btn-success" id="btn-save">
              Tạo User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;
