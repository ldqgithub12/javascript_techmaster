import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo d-flex justify-content-center align-items-center">
        <h3 className="fs-4 text-white">ADMIN</h3>
      </div>
      <div className="menu">
        <div className="menu-item">
          <h5>
            <span className="d-inline-block me-1">
              <i className="fa-solid fa-chess"></i>
            </span>
            Quản lý bài viết
          </h5>
          <ul className="m-0 p-0">
            <li>
              <Link to={"/admin/blogs"}>Danh sách bài viết</Link>
            </li>
            <li>
              <Link to={"/admin/blogs/own-blogs"}>Bài viết của tôi</Link>
            </li>
            <li>
              <Link to={"/admin/blogs/create"}>Tạo bài viết</Link>
            </li>
          </ul>
        </div>
        <div className="menu-item">
          <h5>
            <span className="d-inline-block me-1">
              <i className="fa-solid fa-explosion"></i>
            </span>
            Quản lý danh mục
          </h5>
          <ul className="m-0 p-0">
            <li>
              <a href="#">Danh sách danh mục</a>
            </li>
          </ul>
        </div>
        <div className="menu-item">
          <h5>
            <span className="d-inline-block me-1">
              <i className="fa-solid fa-cookie-bite"></i>
            </span>
            Quản lý user
          </h5>
          <ul className="m-0 p-0">
            <li>
              <a href="#">Danh sách user</a>
            </li>
            <li>
              <a href="#">Tạo user</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
